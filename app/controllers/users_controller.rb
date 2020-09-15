class UsersController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update, :destroy]

  def show
    @media = Media.all
    @bookmarked_index = MediaUser.where(user_id: @user.id, bookmarked: true)
    @watched_index = MediaUser.where(user_id: @user.id, watched: true)
    @excluded_index = MediaUser.where(user_id: @user.id, excluded: true)
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(@user)
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    sign_out
    redirect_to root_path
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :netflix?, :amazon?, :disney_plus?)
  end
end
