# frozen_string_literal: true

class DonationsController < ApplicationController
  def index
    @events = Event.where('about ilike ?', "%#{params[:term]}%").page(params[:page]).per(15)
  end

  def new
    @organizations = Organization.for_autocomplete(:name, :id)
    @donation = Donation.new
  end
end
