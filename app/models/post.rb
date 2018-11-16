# == Schema Information
#
# Table name: posts
#
#  id          :bigint(8)        not null, primary key
#  image_url   :string           not null
#  description :text
#  poster_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ApplicationRecord
  validates :image_url, :poster_id, presence: true
  has_one_attached :photo

  belongs_to :user,
    foreign_key: :poster_id,
    class_name: :User

end