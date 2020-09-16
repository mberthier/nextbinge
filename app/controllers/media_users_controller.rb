class MediaUsersController < ApplicationController
  before_action :find_user, only: [:new, :create, :update, :destroy, :bookmarked_index, :excluded_index, :watched_index]

  def index
    @media_users = MediaUser.all
  end

  def show
  end

  def new
    @user = current_user
    @media = Media.new
    @media_user = MediaUser.new
  end

  def create
    @user = current_user
    @media_user = MediaUser.new(params[:media_user])
    @media_user.media_id = @media
    @media_user.user_id = @user
    if @media_user.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def bookmark
    @media = Media.find(params[:media])
    @media_user = MediaUser.where(media: @media, user: current_user).first_or_create
    if @media_user.bookmarked == false
      @media_user.bookmarked = true
      @media_user.save
    else
      @media_user.bookmarked = false
      @media_user.save
    end
  end

  def watched
    @media = Media.find(params[:media])
    @media_user = MediaUser.where(media: @media, user: current_user).first_or_create
    if @media_user.watched == false
      @media_user.watched = true
      @media_user.save
    else
      @media_user.watched = false
      @media_user.save
    end
  end

  def excluded
    @media = Media.find(params[:media])
    @media_user = MediaUser.where(media: @media, user: current_user).first_or_create
    if @media_user.excluded == false
      @media_user.excluded = true
      @media_user.save
    else
      @media_user.excluded = false
      @media_user.save
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

  def bookmark_params
    params.permit(:media)
  end

  def media_user_params
    params.require(:media_user).permit(:media_id, :user_id, :bookmarked, :excluded, :watched)
  end
end
