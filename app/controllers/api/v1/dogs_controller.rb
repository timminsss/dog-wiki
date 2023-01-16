require 'json'
require 'dotenv'
Dotenv.load

class Api::V1::DogsController < ApplicationController
  def index
    dogs = RestClient.get 'https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1&api_key=live_fKmI0dSE8wWyT0adSB8VD3XKv83sN6sBZHMJnyutiPJVaSbhoZcjS08cWirOD850'
    render json: dogs
  end

  def show
    url = 'https://api.thedogapi.com/v1/images/' + params[:id] + '?api_key=live_fKmI0dSE8wWyT0adSB8VD3XKv83sN6sBZHMJnyutiPJVaSbhoZcjS08cWirOD850'
    dog = RestClient.get url

    render json: dog
  end
end
