require 'open-uri'
require 'nokogiri'
require 'net/http'
require 'openssl'
require 'json'

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def result
    @survey = current_user.surveys.last
    services = ["netflix", "amazon", "disney"]
    reco_movies = services.map do |service|
      scrape_by_service(service)
    end
    @reco_movies = reco_movies.flatten

    # iterate other the @reco_movies  and run the IMDB API
  end

  private

  def scrape(streaming_service)
    @survey = current_user.surveys.last
    @platform = streaming_service
    genre = {
      "Action & Adventure": 5,
      "Animatio": 6,
      "Anim": 39,
      "Biograph": 7,
      "Children": 8,
      "Comedy": 9,
      "Crime": 10,
      "Cult": 41,
      "Documentary": 11,
      "Drama": 3,
      "Family": 12,
      "Fantasy": 13,
      "History": 17,
      "Horor": 19,
      "Independent": 43,
      "Musical": 22,
      "Mystery": 23,
      "Romance": 4,
      "Sci-Fi": 26,
      "Sport": 29,
      "Standup & Talk": 45,
      "Thriller": 32
    }
    @genre = genre[@survey.genre]
    @media = @survey.media_type
    @rating = @survey.ratings
    @year = @survey.release_year
    url = "https://reelgood.com/uk/#{@media}/source/#{@platform}?filter-genre=#{@genre}&filter-imdb_start=#{@rating}&filter-year_start=#{@year}"

    movies = []

    html_file = open(url).read
    html_doc = Nokogiri::HTML(html_file)
    html_doc.search('tr a').each do |element|
      movies << Media.new( title: element.inner_text, streaming_service: streaming_service, media_type: @media)
    end

    movies = movies.drop(1).reject(&:empty?)
    movies = movies.sample(5)
  end

  def scrape_by_service(service)
    if @survey[service]
      scrape(service)
    end
  end
end
