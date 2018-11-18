json.post do
  json.partial! '/api/posts/post', post: @post
  
end

# json.array! @posts do |post|
#   json.ex

# json.photoUrls @post.photos.map { |file| url_for(file) }
