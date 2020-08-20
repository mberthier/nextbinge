class Survey < ApplicationRecord
  belongs_to :user, dependent: :destroy

  validates :genre, :mood, :media_type, :ratings, :release_year, presence: true
  validates :genre, inclusion: { in: [
    "Action & Adventure", "Animation", "Anime", "Biography", "Children", "Comedy",
    "Crime", "Cult", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Independant", "Musical",
    "Mystery", "Romance", "Sci-Fi", "Sport", "Standup & Talk", "Thriller"
  ] }
  validates :mood, inclusion: { in: ["Sad", "Neutral", "Happy", "Sick", "Angry", "Tired"] }
  validates :media_type, inclusion: { in: ["Movies", "TV", "Don’t Care"] }
  validates :ratings, inclusion: { in: [">5/10", ">7.5", "All"] }
  validates :release_year, inclusion: { in: ["oldies", "80s - 90s", "90 - 00s", "00s - 10s", "10s - Now", "All"] }
end
