@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.authoredPosts user.posts.each do |post|
      json.extract! post, :id 
    end
  end
end
