class AddMainPhotoToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :mainphoto, :string
  end
end
