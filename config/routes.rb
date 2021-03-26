Rails.application.routes.draw do
  
  namespace :api do
    resources :handymen do
      resources :services
    end
    resources :services do
      resources :comments
    end
  end
end
