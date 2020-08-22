class MediaUser < ApplicationRecord
  belongs_to :media
  belongs_to :user, dependent: :destroy
end
