class Api::V1::InvestorsController < ApplicationController


  def index
    render json: Investor.all
  end
end
