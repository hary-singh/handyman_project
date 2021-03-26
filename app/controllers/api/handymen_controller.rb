class Api::HandymenController < ApplicationController
  before_action :set_handyman, only: [:update, :show, :destroy]

  def index
    render json: Handyman.all
  end

  def show
    render json: @handyman
  end

  def create 
    @handyman = Handyman.new(handyman_params)
    if @handyman.save
      render json: @handyman
    else
      render json: { errors: @handyman.errors }, status: :unprocessable_entity
    end
  end

  def update 
    if @handyman.update(handyman_params)
      render json: @handyman
    else
      render json: { errors: @handyman.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @handyman.destroy
    render json: { message: 'Handyman deleted'}
  end

  private
    def set_handyman
      @handyman = Handyman.find(params[:id])
    end

    def handyman_params
      params.require(:handyman).permit(:title, :specialty)
    end
end