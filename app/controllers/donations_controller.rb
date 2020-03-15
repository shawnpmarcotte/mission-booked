# frozen_string_literal: true

class DonationsController < ApplicationController
  def index
    @organizations = Organization.all
    respond_to do |format|
      format.html do
      end
      format.json do
        render json: @organizations
      end
    end
  end
end
#   def new
#     @organizations = Organization.pluck(:name, :id)
#     @donation = Donation.new
#
