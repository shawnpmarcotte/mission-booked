class AddPhoto2ToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :photo2, :string
  end
end
