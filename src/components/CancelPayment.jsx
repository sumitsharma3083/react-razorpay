import React from 'react'
import {Link} from 'react-router-dom'

const CancelPayment = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>You have cancelled your order</h1>
    <div style={{textAlign:"center"}}>
        <Link to="/">Try Again</Link>
    </div>
    </>
  )
}

export default CancelPayment