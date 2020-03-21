class AddPhoto1ToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :photo1, :string
  end
end
