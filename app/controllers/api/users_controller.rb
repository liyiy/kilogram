class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    users = User.all
    if params[:username]
      users = users.where("username LIKE :username",
      {:username => "#{params[:username]}%"})
    end
    @users = users
    render :index
  end

  def search
    if params[:username] != ""
      @users = User.all.where("username LIKE :username",
      {:username => "#{params[:username]}%"})
    end
    # debugger 
    render :index
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show.json.jbuilder'
  end


  private

  def user_params
    params.require(:user).permit(:username, :password, :photo)
  end

  # def bounds
  #   params[:bounds]
  # end
end
