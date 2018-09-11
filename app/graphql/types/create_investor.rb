class Mutations::CreateInvestor < Mutations::BaseMutation

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
