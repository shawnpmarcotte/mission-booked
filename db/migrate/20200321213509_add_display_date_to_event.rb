class AddDisplayDateToEvent < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :displaydate, :string
  end
end
