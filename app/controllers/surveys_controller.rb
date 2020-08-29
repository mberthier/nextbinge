class SurveysController < ApplicationController
  # before_action :find_user, only: [:new]

  def index
    @survey = Survey.all
  end

  def show
    @survey = Survey.find(params[:id])
  end

  def new
    @survey = Survey.new
  end

  def create
    @survey = Survey.new(survey_params)
    @survey.user = current_user
    if @survey.save
      @survey.save!
      redirect_to result_path
    else
      render :new
    end
  end

  private

  def find_user
    @user = User.find(params[:user_id])
  end

  def survey_params
    params.require(:survey).permit(:genre, :mood, :media_type, :ratings, :release_year)
  end
end
