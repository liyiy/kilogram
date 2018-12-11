  json.partial! '/api/posts/post', post: @post
  json.imageUrl url_for(@post.photo)
