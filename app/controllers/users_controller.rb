class UserController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
      if @user.update(user_params)
        redirect_to users_path
      else
        render action: :edit
      end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    sign_out
    redirect_to root_path
  end

  end

  private

  def find_user
    @user = User.find(params[:id])
  end

end

