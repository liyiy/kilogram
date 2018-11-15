class CreatePost < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :image_url, null: false
      t.text :description
      t.integer :poster_id, null: false
      t.timestamps
    end
    add_index :posts, :poster_id
  end
end
