class MediasController < ApplicationController
  def show
    @media = Media.find(params[:id])
  end
end
