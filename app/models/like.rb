# == Schema Information
#
# Table name: likes
#
#  id            :bigint(8)        not null, primary key
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#

class Like < ApplicationRecord
  validates :user_id, uniqueness: { scope: [:likeable_id, :likeable_type] }
  validates :likeable_id, :likeable_type, :user_id, presence: true

  belongs_to :likeable,
    polymorphic: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id


end
