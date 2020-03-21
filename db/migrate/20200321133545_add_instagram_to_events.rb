class AddInstagramToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :instagram, :string
  end
end
