class AddPhoto3ToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :photo3, :string
  end
end
