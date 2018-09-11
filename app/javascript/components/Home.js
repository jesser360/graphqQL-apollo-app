import React from "react"
import PropTypes from "prop-types"
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";

import AllInvestors from './AllInvestors.js'
import Investor from './Investor.js'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

class Home extends React.Component {

constructor(props){
  super(props);
  this.state = {
    investors:[],
    currentInvestor:this.props.currentArtist,
    showAllInvestors:this.props.showAllArtists,
  };
}
componentDidMount(){
    fetch('/api/v1/investors.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ investors: data }) });
  }

  render () {
    return (
      <div>
        <AllInvestors investors={this.state.investors}/>
          <div>
          </div>
      </div>
    );
  }
}
Home.defaultProps = {
};

export default Home
