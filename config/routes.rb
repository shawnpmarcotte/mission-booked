# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users do
    delete '/users/sign_out' => 'devise/sessions#destroy'
  end

  authenticated :user, ->(u) { u.admin? } do
    namespace :admin do
      resources :users
      resources :organizations
      resources :events
      resources :donate
      resources :gallery
      resources :about

      root to: 'users#index'
    end
  end
  authenticated :user do
  end

  root 'events#index'
  resources :events
  resources :organizations
  resources :events_page
  resources :donate
  resources :gallery
  resources :about
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
