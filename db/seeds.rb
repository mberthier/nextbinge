require 'open-uri'
require 'nokogiri'
require 'net/http'
require 'openssl'
require 'json'

# Delete all instances of all models
Survey.delete_all
MediaUser.delete_all
User.delete_all
Media.delete_all


# Create users
users = [["mikey@email.com", "mikey@email.com", "Mikey", "Knott", true, true]]
users.each do |email, password, first_name, last_name, netflix, amazon,|
  User.create!(email: email, password: password, first_name: first_name, last_name: last_name, netflix: netflix, amazon: amazon)
end
puts "Users created"


# Create surveys
surveys = [["Action & Adventure", "Happy", "Movies", ">7.5", "All", User.last]]
surveys.each do |genre, mood,
  media_type, ratings, release_year, user|
  Survey.create!(genre: genre, mood: mood, media_type: media_type, ratings: ratings, release_year: release_year, user: user)
end
puts "Surveys created"


# Create media
Media.create!(
  title: 'Titanic',
  plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
  release_year: 1997,
  ratings: 7.8,
  genre: "Drama",
  poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Amazon")

Media.create!(
  title: 'Batman Begins',
  plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
  release_year: 2005,
  ratings: 8.2,
  genre: "Action & Adventure",
  poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Netflix")

Media.create!(
  title: "The Shawshank Redemption",
  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  release_year: 1995,
  ratings: 9.3,
  genre: "Drama",
  poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  media_type: "Movie",
  streaming_service: "Netflix")

Media.create!(
  title: "The Godfather",
  plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  release_year: 1972,
  ratings: 9.1,
  genre: "Crime",
  poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Amazon")

Media.create!(
  title: "The Godfather: Part II",
  plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
  release_year: 1974,
  ratings: 9.0,
  genre: "Crime",
  poster: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Netflix")

Media.create!(
  title: "The Dark Knight",
  plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  release_year: 2008,
  ratings: 9.0,
  genre: "Action & Adventure",
  poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Amazon")

Media.create!(
  title: "12 Angry Men",
  plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
  release_year: 1957,
  ratings: 8.9,
  genre: "Crime",
  poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_CR0,0,649,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Disney")

Media.create!(
  title: "Schindler's List",
  plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  release_year: 1993,
  ratings: 8.9,
  genre: "Biography",
  poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Amazon")

Media.create!(
  title: "The Lord of the Rings: The Return of the King",
  plot: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  release_year: 2003,
  ratings: 8.9,
  genre: "Action & Adventure",
  poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Netflix")

Media.create!(
  title: "Pulp Fiction",
  plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  release_year: 1994,
  ratings: 8.8,
  genre: "Drama",
  poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg",
  media_type: "Movie",
  streaming_service: "Disney")
puts "Media created"


# Create Media Users
MediaUser.create!(media_id: Media.first.id, user_id: User.last.id, bookmarked: true)
MediaUser.create!(media_id: Media.last.id, user_id: User.last.id, watched: true)
puts "MediaUsers created"

# Recommendation logic

# def result
#     services = ["netflix", "amazon", "disney_plus"]

#     reco_movies = services.map do |service|
#       scrape_by_service(service)
#     end

#     p @reco_movies = reco_movies.flatten
# end

# def scrape_by_service(service)
#     scrape(service) unless !User.last[service]
# end


# def scrape(streaming_service)
#   @survey = Survey.last
#   @platform = streaming_service
#   genres = {
#     "Action & Adventure" => 5,
#     "Animation" => 6,
#     "Anime" => 39,
#     "Biography" => 7,
#     "Children" => 8,
#     "Comedy" => 9,
#     "Crime" => 10,
#     "Cult" => 41,
#     "Documentary" => 11,
#     "Drama" => 3,
#     "Family" => 12,
#     "Fantasy" => 13,
#     "History" => 17,
#     "Horor" => 19,
#     "Independent" => 43,
#     "Musical" => 22,
#     "Mystery" => 23,
#     "Romance" => 4,
#     "Sci-Fi" => 26,
#     "Sport" => 29,
#     "Standup & Talk" => 45,
#     "Thriller" => 32
#   }

#   @genre = genres[@survey.genre]
#   @media_type = @survey.media_type.downcase
#   @rating = @survey.ratings.gsub(">", "")
#   @year = @survey.release_year.gsub(/[All]/, '')
#   url = "https://reelgood.com/uk/#{@media_type}/source/#{@platform}?filter-genre=#{@genre}&filter-imdb_start=#{@rating}&filter-year_start=#{@year}"

#   @movies = []

#   html_file = open(url).read
#   html_doc = Nokogiri::HTML(html_file)
#   html_doc.search('tr a').drop(1).each do |element|
#     @movies << element.inner_text
#     @movies = @movies.reject(&:empty?)
#   end
#   @movies = @movies.sample(3)
#   find_or_create
# end

# def find_or_create
#   streaming_reco = @movies.map do |movie|
#     Media.where(title: movie).first_or_create do |media|
#       imdb(media.title)
#       media.streaming_service = @platform
#       media.media_type = @media_type.gsub(/[s]/, '').capitalize
#       media.genre = @survey.genre
#       media.release_year = @data.year
#       media.poster = @data.poster
#       media.plot = @data.plot
#       media.ratings = @data.rating
#       media.save
#     end
#   end
#   streaming_reco
# end



# def imdb(movie)
#   @movie = movie
#   base_url = URI('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/').freeze
#   url = base_url + @movie.split.join.downcase.gsub(/[^a-zA-Z0-9\-]/,"")
#   @response = api_response(url)
#   @data = set_movie_data
# end

# def api_response(url)
#   http = Net::HTTP.new(url.host, url.port)
#   http.use_ssl = true
#   http.verify_mode = OpenSSL::SSL::VERIFY_NONE
#   request = Net::HTTP::Get.new(url)
#   request['x-rapidapi-host'] = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
#   request['x-rapidapi-key'] = 'dkFMjOW36JmshaQjczgek92fjz4jp15oZXcjsn2N2fvhWKjgC7'
#   response = http.request(request)
#   JSON.parse(response.read_body)
# end

# def set_movie_data
#   movie_data = Struct.new(:title, :poster, :year, :plot, :rating)

#   movie_data.new(
#     @response['title'],
#     @response['poster'],
#     @response['year'],
#     @response['plot'],
#     @response['rating']
#   )
# end

# result

