class AddEventToFavorite < ActiveRecord::Migration[6.0]
  def change
    add_reference :favorites, :event, null: false, foreign_key: true
  end
end
