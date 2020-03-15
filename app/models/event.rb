class Event < ApplicationRecord
  belongs_to :organization

  scope :filter_by_category, -> (category) {where category: category}

end
