class AddMoreInfoToEvents < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :moreinfo, :text
  end
end
