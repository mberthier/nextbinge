Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :user, only: :show do
    resources :survey, only: [:show, :index]
    resources :media_user, only: [:index, :create, :update, :destroy] do
      collection do
        get :bookmarked_index
        get :watched_index
        get :excluded_index
      end
    end
  end
  resources :media, only: :create
end
