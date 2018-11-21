@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.authoredPosts user.posts.each do |post|
      json.extract! post, :id
    end
    json.numPosts user.posts.count
    json.allFollowers user.userFollowers.ids
    json.allFollowings user.userFollowings.ids
    json.numFollowers user.userFollowers.count
    json.numFollowings user.userFollowings.count
  end
end
