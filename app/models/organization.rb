# frozen_string_literal: true

class Organization < ApplicationRecord
  has_many :events

  def self.for_autocomplete(label, value)
    pluck(label.to_sym, value.to_sym).map do |item|
      {
        label: item[0],
        value: item[1]
      }
    end
  end
end
