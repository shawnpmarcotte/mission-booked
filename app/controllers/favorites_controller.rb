class FavoritesController < ApplicationController
  before_action :set_event, only: [:create]

  def create
    @favorite = current_user.favorites.find_or_create_by(event: @event)
    respond_to do |format|
      if @favorite.save
        format.html { redirect_to events_path }
      end
    end
  end

  def destroy
    current_user.favorites.where(event_id: params[:id]).destroy_all
    redirect_to favorites_path, notice: 'Favorite was successfully removed.'
  end

  def index
    @favorites = current_user.favorites.all
  end

  private
  def set_event
    @event = Event.find(params[:event_id])
  end
end
