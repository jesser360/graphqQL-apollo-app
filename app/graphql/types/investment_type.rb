module Types
  class InvestmentType < Types::BaseObject
    field :id, ID, null: false
    field :amount, Integer, null: true
    field :stage, String, null: true
  end
end
