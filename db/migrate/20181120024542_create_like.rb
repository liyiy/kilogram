class CreateLike < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :likeable_id, null: false
      t.string :likeable_type, null: false
      t.timestamps
    end
  end
end
