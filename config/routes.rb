Rails.application.routes.draw do
  resources :repasemos
  resources :contactanos
  resources :nosotros
  root to:"home#index"
end
