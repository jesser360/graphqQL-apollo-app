import React from "react"
import PropTypes from "prop-types"
import SingleInvestor from './SingleInvestor.js'


const AllInvestors = (props) => {
var investors = props.investors.map((investor) => {
    return(
      <div key={investor.id}>
        <SingleInvestor investor ={investor}/>
      </div>
    )
  })
return(
      <div>
        {investors}
      </div>
    )
}


AllInvestors.defaultProps = {
};

export default AllInvestors
