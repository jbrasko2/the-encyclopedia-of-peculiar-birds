class BirdsController < ApplicationController

    def index
        render json: Bird.all
    end

    def show
        render json: @bird
    end
    
end
