# frozen_string_literal: true

class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    create_table :donations do |t|
      t.string :first_name
      t.string :last_name
      t.belongs_to :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
