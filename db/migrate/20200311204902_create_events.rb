class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.text :about
      t.string :location
      t.references :organization, null: false, foreign_key: true

      t.timestamps
    end
  end
end
