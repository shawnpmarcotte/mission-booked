# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users do
    delete '/users/sign_out' => 'devise/sessions#destroy'
  end

  authenticated :user, ->(u) { u.admin? } do
    namespace :admin do
      root 'users#index'
      resources :users
      resources :organizations
      resources :events
      resources :donations
      resources :gallery
      resources :about
    end
  end

  authenticated :user do
  end

  root 'homes#index'
  resources :events
  resources :organizations
  resources :donations
  resources :gallery
  resources :about
  resources :favorites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
