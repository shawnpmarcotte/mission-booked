class AddCityStateToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :city_state, :string
  end
end
