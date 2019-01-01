# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  body              :text             not null
#  parent_comment_id :integer
#  user_id           :integer          not null
#  post_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, length: {minimum: 1}

  belongs_to :user
  belongs_to :post

  has_many :likes,
    class_name: :Like,
    foreign_key: :likeable_id,
    as: :likeable

end
