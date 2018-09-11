module Types
  class MutationType < Types::BaseObject

      field :test_field, String, null: false,
        description: "An example field added by the generator"
      def test_field
        "Hello World"
      end
  end


  class Mutations::CreateInvestor < Types::BaseObject

    field :comment, Types::Investor, null: true
    field :errors, [String], null: false

    def resolve()
      investor = investor.build(company: company)
      if comment.save
        # Successful creation, return the created object with no errors
        {
          comment: investor,
          errors: [],
        }
      else
        # Failed save, return the errors to the client
        {
          investor: nil,
          errors: investor.errors.full_messages
        }
      end
    end
  end

end
