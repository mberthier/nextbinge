Survey.delete_all
User.delete_all

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
