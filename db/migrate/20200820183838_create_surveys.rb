class CreateSurveys < ActiveRecord::Migration[6.0]
  def change
    create_table :surveys do |t|
      t.string :genre
      t.string :mood
      t.string :media_type
      t.string :ratings
      t.string :release_year
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
