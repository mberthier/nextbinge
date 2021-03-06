require 'open-uri'
require 'nokogiri'
require 'net/http'
require 'openssl'
require 'json'
require 'uri'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

  def search
    query = params[:search_term]
    @netflix = params[:netflix]
    @amazon = params[:amazon]
    @disney = params[:disney_plus]

    url = URI("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=#{query}&country=uk")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE

    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = ENV['RAPID_HOST']
    request["x-rapidapi-key"] = ENV['RAPID_KEY']
    @searchresults = JSON.parse(http.request(request).read_body)
  end

  def result
    services = ["netflix", "amazon", "disney_plus"]

    reco_movies = services.map do |service|
      scrape_by_service(service)
    end
    @blocked_reco = []
    @reco_movies = reco_movies.flatten.compact.each do |reco_movie|
      if reco_movie.class == MediaUser
        @blocked_reco << reco_movie if reco_movie.excluded?
      end
    end
    @reco_movies = @reco_movies - @blocked_reco
    @reco_movies = @reco_movies.sample(3)
  end

  private

  def search_params
    params.require(:search).permit(:search_term)
  end

  def scrape_by_service(service)
    scrape(service) unless !current_user[service]
  end

  def scrape(streaming_service)
    @survey = current_user.surveys.last
    @platform = streaming_service
    genres = {
      "Action & Adventure" => 5,
      "Animation" => 6,
      "Anime" => 39,
      "Biography" => 7,
      "Children" => 8,
      "Comedy" => 9,
      "Crime" => 10,
      "Cult" => 41,
      "Documentary" => 11,
      "Drama" => 3,
      "Family" => 12,
      "Fantasy" => 13,
      "History" => 17,
      "Horor" => 19,
      "Independent" => 43,
      "Musical" => 22,
      "Mystery" => 23,
      "Romance" => 4,
      "Sci-Fi" => 26,
      "Sport" => 29,
      "Standup & Talk" => 45,
      "Thriller" => 32
    }

    @genre = genres[@survey.genre]
    @media_type = @survey.media_type.downcase
    @rating = @survey.ratings.gsub(/[All>]/, "")
    @year = @survey.release_year.gsub(/[All]/, '')
    url = "https://reelgood.com/uk/#{@media_type}/source/#{@platform}?filter-genre=#{@genre}&filter-imdb_start=#{@rating}&filter-year_start=#{@year}"

    @movies = []

    html_file = open(url).read
    html_doc = Nokogiri::HTML(html_file)
    html_doc.search('tr a').drop(1).each do |element|
      @movies << element.inner_text
      @movies = @movies.reject(&:empty?)
    end
    @movies = @movies.sample(3)
    find_or_create
  end

  def find_or_create
    streaming_reco = @movies.map do |movie|
      if current_user.media_users.find_by(media: Media.where(title: movie))
        current_user.media_users.find_by(media: Media.where(title: movie))
      # if MediaUser.find(media: Media.where(title: movie), user: current_user).exists?
      #   MediaUser.find(media: Media.where(title: movie), user: current_user)
      else
        Media.where(title: movie).first_or_create do |media|
          imdb(media.title)
          media.streaming_service = @platform
          media.media_type = @media_type.gsub(/[s]/, '').capitalize
          media.genre = @survey.genre
          media.release_year = @data.year
          media.poster = @data.poster
          media.plot = @data.plot
          media.ratings = @data.rating
        end
      end
    end
    streaming_reco.select(&:persisted?)
  end

  def imdb(movie)
    @movie = movie
    base_url = URI('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/').freeze
    url = base_url + @movie.split.join.downcase.gsub(/[^a-zA-Z0-9\-]/, "")
    @response = api_response(url)
    @data = set_movie_data
  end

  def api_response(url)
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Get.new(url)
    request['x-rapidapi-host'] = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
    request['x-rapidapi-key'] = 'dkFMjOW36JmshaQjczgek92fjz4jp15oZXcjsn2N2fvhWKjgC7'
    response = http.request(request)
    JSON.parse(response.read_body)
  end

  def set_movie_data
    movie_data = Struct.new(:title, :poster, :year, :plot, :rating)

    movie_data.new(
      @response['title'],
      @response['poster'],
      @response['year'],
      @response['plot'],
      @response['rating']
    )
  end
end
