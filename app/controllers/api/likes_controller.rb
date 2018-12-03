class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def index
    @likes = Like.all
    render :index
  end

  def destroy

    @like = Like.find_by(like_params)
    #
    if @like
      @like.destroy
    end
    # current_user.likes.destroy(@like)

    render :show
  end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type, :user_id)
  end

end
