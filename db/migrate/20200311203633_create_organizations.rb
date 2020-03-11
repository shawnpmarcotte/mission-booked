class CreateOrganizations < ActiveRecord::Migration[6.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.text :about
      t.string :location
      t.string :contact

      t.timestamps
    end
  end
end
