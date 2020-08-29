class MediasController < ApplicationController
  def create
    # :title, :plot, :release_year, :ratings, :genre, :poster, :media_type, :streaming_service
  end

  def show
    @media = Media.find(params[:id])
  end
end
