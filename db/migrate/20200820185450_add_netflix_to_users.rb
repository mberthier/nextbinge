class AddNetflixToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :netflix, :boolean, default: false
  end
end
