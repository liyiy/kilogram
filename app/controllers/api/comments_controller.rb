class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.new(comment_params)
    @comment.post_id = params[:post_id]
    if @comment.save
      render :show
    else
      render json: @comment, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update_attributes
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  # def show
  # end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end


end
