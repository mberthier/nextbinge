Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :users, only: [:show, :edit, :update] do
    resources :surveys, only: [:show, :index, :new, :create]
    resources :media_user, only: [:index, :create, :update, :destroy] do
      collection do
        get :bookmarked_index
        get :watched_index
        get :excluded_index
      end
    end
  end
  resources :medias, only: [:create, :show]
  get "result", to: "pages#result"
  post "bookmark", to: "media_users#bookmark"
  get '/search', to: 'pages#search', :as => 'search_page_get'
  post '/search', to: 'pages#search', :as => 'search_page_post'
end
