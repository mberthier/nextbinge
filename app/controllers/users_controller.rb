class UserController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
  end

  def show
  end

  def edit
  end

  def update
      if @user.update(user_params)
        redirect_to users_path
      else
        render action: :edit
      end
  end

  def destroy
    @user.destroy
    sign_out
    redirect_to root_path
  end

  end

  private



end

