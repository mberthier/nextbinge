class Media < ApplicationRecord
  belongs_to :media_user
  validates :title, :plot, :release_year, :ratings, :genre, :poster, :media_type, :streaming_service, presence: true
  validates :title, uniqueness: true
end
