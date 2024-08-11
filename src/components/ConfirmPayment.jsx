import React from 'react'
import {Link} from 'react-router-dom'

const ConfirmPayment = () => {
  return (
    <div>
         <h1 style={{textAlign:"center"}}>Your Order has successfully Placed</h1>
         <div style={{textAlign:"center"}}>
        <Link to="/">Go back to orders</Link>
         </div>
    </div>
  )
}

export default ConfirmPayment