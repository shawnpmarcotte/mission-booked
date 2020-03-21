class AddFacebookToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :facebook, :string
  end
end
