module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :investor, InvestorType, null: true do
      description "Find an investor by ID"
      argument :id, ID, required: true
    end

    # field :all_investors, InvestorType, null: true do
    #   description "Find an investor by ID"
    #   argument :id, ID, required: false
    # end

    def investor(id:)
        Investor.find(id)
    end


  end
end
