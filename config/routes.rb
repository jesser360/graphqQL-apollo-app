Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'pages#home'

  Rails.application.routes.draw do
    namespace :api do
      namespace :v1 do
       resources :investors, only: [:index]
      end
    end
  end
end
