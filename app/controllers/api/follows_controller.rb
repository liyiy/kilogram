class Api::FollowsController < ApplicationController

  def create

    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow, status: unprocessable_entity
    end

  end

  def index
    @follows = Follow.all
    render :index
  end

  def destroy

    @follow = Follow.find_by(follower_id: params[:currUserId], followee_id: params[:userId])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end

end
