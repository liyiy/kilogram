@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    if post.photo.attached?
      json.imageUrl url_for(post.photo)
    end
    json.numLikes post.likes.count
    json.comments post.comments.each do |comment|
      json.id comment.id 
      json.body comment.body 
      json.username comment.user.username  
      json.userId comment.user.id
    end 
    json.userLikes post.liker_ids

  end
end


# json.array! @posts do |post|
#   json.set! post.id
#   json.extract! post, :id, :description, :photo
#   json.imageUrl url_for(post.photo)
# end
