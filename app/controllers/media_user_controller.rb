class MediaUserController < ApplicationController
  before_action :find_user, only: [:new, :create, :update, :destroy, :bookmarked_index, :excluded_index, :watched_index]

  def index
    @media_users = MediaUser.all
  end

  def show
  end

  def new
    @user = current_user
    @media_user = MediaUser.new
  end

  def create
    @user = current_user
    @media_user = MediaUser.new(params[:media_user])
    @media_user.user = @user
    if @media_user.save
      redirect_to @media_user
    else
      render 'new'
    end
  end

  def update
    @media_user = MediaUser.find(params[:id])
      if @media_user.update(params[:media_user])
        redirect_to @media_user
      else
        render 'edit'
      end
  end

  def destroy
    @media_user = MediaUser.find(params[:id])
    if @media_user.destroy
      redirect_to root_path
    end
  end

  private

  def find_user
    @user = User.find(params[:user_id])
  end

  def media_user_params
    params.require(:media_user).permit(:media_id, :user_id, :bookmarked, :excluded, :watched)
  end 
end
