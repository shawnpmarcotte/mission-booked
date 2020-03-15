# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :organization

  scope :filter_by_category, ->(category) { where category: category }
  scope :filter_by_city_state, ->(city_state) { where city_state: city_state }
  scope :filter_by_date, ->(date) { where date: date }
end
