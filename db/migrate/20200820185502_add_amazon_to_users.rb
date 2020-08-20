class AddAmazonToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :amazon, :boolean, default: false
  end
end
