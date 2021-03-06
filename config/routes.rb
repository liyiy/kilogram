Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index] do
      collection do
        get :search
      end
    end
    
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :index, :update, :destroy, :show]
    resources :comments, only: [:create, :index, :update, :destroy]
    resources :likes, only: [:create, :index, :destroy]
    resources :follows, only: [:create, :index, :destroy]
  end

end
