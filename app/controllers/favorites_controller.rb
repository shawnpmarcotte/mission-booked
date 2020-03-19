class FavoritesController < ApplicationController
  before_action :set_event, only: [:create]

  def create
    @favorite = current_user.favorites.find_or_create_by(event: @event)
    respond_to do |format|
      if @favorite.save
        format.html { redirect_to root_url }
        format.json { render :show, status: :created, location: @event }
      else
        format.html { render :new }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  private
  def set_event
    @event = Event.find(params[:event_id])
  end
end
