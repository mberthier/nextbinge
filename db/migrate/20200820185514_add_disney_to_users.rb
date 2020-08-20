class AddDisneyToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :disney, :boolean, default: false
  end
end
