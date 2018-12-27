@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'comment', comment: comment
    json.numLikes comment.likes.count 
    json.username comment.user.username
  end
end
