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

      root to: 'users#index'
    end
  end
  authenticated :user do
  end

  root 'organizations#index'
  resources :events
  resources :organizations
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
