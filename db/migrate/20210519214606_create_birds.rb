class CreateBirds < ActiveRecord::Migration[6.1]
  def change
    create_table :birds do |t|
      t.string :name
      t.string :scientific_name
      t.string :order
      t.string :family
      t.string :genus
      t.string :species
      t.string :conservation
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
