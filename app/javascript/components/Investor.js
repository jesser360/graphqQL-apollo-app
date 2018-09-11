import React from "react"
import PropTypes from "prop-types"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});


const DRAFTS_QUERY = gql`
  {
    investor(id: 1) {
      company
      location
      investments{
        amount
        stage
      }
    }
  }
`

class Investor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        company:null,
        location:null,
        investments:null,
        investor:[]
      };
    }
  componentDidMount(){
  client.query({
    query: gql`
    {
      investor(id: 1) {
        company
        location
        investments{
          amount
          stage
        }
      }
    }
    `
  }).then((res) => this.setState({location:res.data.investor.location,company:res.data.investor.company,investments:res.data.investor.investments[0].amount}));
  }

  render(){

    return (
      <div>
        <h1>Company: {this.state.company}</h1>
        <h2>Location: {this.state.location}</h2>
        <h3>Investment amount: {this.state.investments}</h3>

      </div>
    )
  }
}

Investor.defaultProps = {
};

export default Investor
