class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user
    if @follow.save
      render :show
    else
      render json: @follow, status: unprocessable_entity
    end

  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end

end
