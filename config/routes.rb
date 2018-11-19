Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :update, :destroy, :show] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:update, :destroy]
  end

end
