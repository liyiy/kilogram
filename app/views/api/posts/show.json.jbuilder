json.post do
  json.partial! '/api/posts/post', post: @post
  json.poster_username @post.user.username 
  json.imageUrl url_for(@post.photo)
end
