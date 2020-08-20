class Media < ApplicationRecord
  belongs_to :media_user
  validates :title, :plot, :release_year, :ratings, :genre, :poster, :media_type, :streaming_service, presence: true
  validates :title, uniqueness: true
  validates :media_type, inclusion: { in: ["Movies", "TV"] }
  validates :genre, inclusion: { in: [
    "Action & Adventure", "Animation", "Anime", "Biography", "Children", "Comedy",
    "Crime", "Cult", "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Independant", "Musical",
    "Mystery", "Romance", "Sci-Fi", "Sport", "Standup & Talk", "Thriller"
  ] }
end
