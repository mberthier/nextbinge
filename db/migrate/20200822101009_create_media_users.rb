class CreateMediaUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :media_users do |t|
      t.references :media, null: false, foreign_key: true, 
      t.references :user, null: false, foreign_key: true
      t.boolean :bookmarked, default: false
      t.boolean :excluded, default: false
      t.boolean :watched, default: false

      t.timestamps
    end
  end
end
