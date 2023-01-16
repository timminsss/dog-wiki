Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'dogs/index'
      get 'dogs/create'
      get '/show/:id', to: 'dogs#show'
    end
  end
  # get 'homepage/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "homepage#index"
  get '/*path' => 'homepage#index'
end
