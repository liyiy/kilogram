class Api::PostsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render :show
    else
      render json: @post, status: :unprocessable_entity
    end

  end

  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show 
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def destroy
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:image_url, :description, :photo)
  end

end
