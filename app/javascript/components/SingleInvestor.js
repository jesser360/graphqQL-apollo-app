import React from "react"
import PropTypes from "prop-types"

class SingleInvestor extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render(){
    let company = <span>{this.props.investor.company}</span>
    let location = <span>{this.props.investor.location}</span>
      return(
          <div>
              <div >
                <div className ='row'>
                  <div className='text-center'>
                    <h4><b>Name:{company}</b></h4>
                  </div>
                </div>
                <div className ='row'>
                  <h5>Location: {location}</h5>
                </div>
              </div>
            <hr></hr>
        </div>
        )
      }
    }

  SingleInvestor.defaultProps = {
  };

  export default SingleInvestor
