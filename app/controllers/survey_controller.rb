class SurveyController < ApplicationController
  before_action :find_user, only: [:new]

  def index
    @survey = Survey.all
  end

  def show
    @survey = Survey.find(params[:id])
  end

  def new
    @user = current_user
    @survey = Survey.new
  end

  def create
    @user = current_user
    @survey = Survey.new(survey_params)
    @survey.user = @user
    if @survey.save
      @survey.save!

    redirect_to root_path

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
