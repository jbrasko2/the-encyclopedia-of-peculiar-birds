class BirdsController < ApplicationController
    before_action :set_bird, only: [:show]

    def index
        render json: Bird.all
    end

    def show
        render json: @bird
    end

    private

    def set_bird
        @bird = Bird.find_by_id(params[:id])
    end
    
end
