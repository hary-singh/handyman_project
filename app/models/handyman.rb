class Handyman < ApplicationRecord
  has_many :services, dependent: :destroy
end
