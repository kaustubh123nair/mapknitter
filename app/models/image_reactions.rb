class ImageReactions < ActiveRecord::Base
  # attr_accessible :title, :body
  belongs_to :warpable 
  belongs_to :user
  validates :warpable_id, uniqueness: { scope: :user_id}
  validates :category,format: { with: /like/}
end
