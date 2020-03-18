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

  # def create
  # organizations = Organization.new

  # if organizations.save
  #   redirect_to root_path, notice: 'Task was successfully created.'
  # else
  # # redirect_to root_path, alert: organization.errors.full_messages.join(', ')
  # end
  # end
end
#   def new
#     @organizations = Organization.pluck(:name, :id)
#     @donation = Donation.new
#
