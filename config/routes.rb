Rails.application.routes.draw do
  get 'ember', :to => 'ember#index'

  resources :posts

end
