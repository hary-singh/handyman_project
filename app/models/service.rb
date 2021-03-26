class Service < ApplicationRecord
  belongs_to :handymen 
  has_many :comments, dependent: :destroy
end
