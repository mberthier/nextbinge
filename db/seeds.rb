Survey.delete_all
MediaUser.delete_all
User.delete_all
Media.delete_all

users = [["mikey@email.com", "mikey@email.com", "Mikey", "Knott", true]]
puts "Creating user.."
users.each do |email, password, first_name, last_name, netflix|
  User.create!(email: email, password: password, first_name: first_name, last_name: last_name, netflix: netflix)
end

surveys = [["Action & Adventure", "Happy", "Movies", ">7.5", "All", User.last]]
puts "Creating survey..."
surveys.each do |genre, mood, media_type, ratings, release_year, user|
  Survey.create!(genre: genre, mood: mood, media_type: media_type, ratings: ratings, release_year: release_year, user: user)
end
puts "Creating Medias..."
Media.create!(title: 'Titanic', plot: "How not to sail", release_year: 1997, ratings: 7.8, genre: "Drama", poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,671,1000_AL_.jpg", media_type: "Movie", streaming_service: "Amazon")
Media.create!(title: 'Batman Begins', plot: "Batman does bat things", release_year: 2005, ratings: 8.2, genre: "Action & Adventure", poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg", media_type: "Movie", streaming_service: "Netflix")

puts "Creating MediasUsers..."
MediaUser.create!(media_id: Media.first.id, user_id: User.last.id, bookmarked: true)
MediaUser.create!(media_id: Media.last.id, user_id: User.last.id, watched: true)
