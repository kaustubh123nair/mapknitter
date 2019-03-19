class CreateImageReactions < ActiveRecord::Migration
  def change
    create_table :image_reactions do |t|
      t.string :category, default: 'like'
      t.integer :user_id
      t.integer :warpable_id

      t.timestamps
    end
  end
end
