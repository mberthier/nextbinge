class CreateMedia < ActiveRecord::Migration[6.0]
  def change
    create_table :media do |t|
      t.string :title
      t.text :plot
      t.integer :release_year
      t.integer :ratings
      t.string :genre
      t.string :poster
      t.string :media_type
      t.string :streaming_service
      
      t.timestamps
    end
  end
end
