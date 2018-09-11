module Types
  class InvestorType < Types::BaseObject
    field :id, ID, null: false
    field :company, String, null: true
    field :location, String, null: true
    field :investments, [Types::InvestmentType], null: true
  end
end
