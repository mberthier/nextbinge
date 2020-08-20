class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :surveys
  has_many :media_users
  validates :first_name, :last_name, :netflix, :amazon, :disney, presence: true
end
