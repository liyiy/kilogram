class Api::FollowsController < ApplicationController

  def create
    @follow = current_user.followings.new(follow_params)

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
