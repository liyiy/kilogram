@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    json.imageUrl url_for(post.photo)
  end
end


# json.array! @posts do |post|
#   json.set! post.id
#   json.extract! post, :id, :description, :photo
#   json.imageUrl url_for(post.photo)
# end
