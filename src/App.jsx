import { useState } from 'react'
import './App.css'
import Tshirt from '../public/tshirt.png'
import {
  BrowserRouter, 
  Route,
  Routes
} from 'react-router-dom'
import ConfirmPayment from './components/ConfirmPayment'
import CancelPayment from './components/CancelPayment'


function App() {
  
  const [productName, setProductName] = useState('Tshirt')
  const [productPrice, setProductPrice]= useState(10)
  const [productQuantity , setQuantity] = useState(1)

  const handleCreateSession = async()=>{
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-checkout-session`, {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name: productName,
      price:productPrice,
      quantity : productQuantity
      })
    })

    const body = await response.json();
    window.location.href = body.url
  }



  return (
    <>
    
     <BrowserRouter>
       <Routes>
       <Route path="/" element={(
        <>
         <h1 className='heading'>React Stripe Shop</h1>
          <div className='card'>
           <img src={Tshirt} alt="Tshirt" />
           <h3>Product Name- {productName}</h3>
           <h3>Product Price- ₹{productPrice}</h3>
           <h3>Product Quantity- {productQuantity}</h3>
           <button className='buy_now_btn' onClick={handleCreateSession}>Buy Now</button> 
         </div>
        </>
       )}/>
        <Route path="/paymentsuccess" element={<ConfirmPayment/>}/>
        <Route path="/paymentcancel" element={<CancelPayment/>}/>
       </Routes>
     </BrowserRouter>
    </> 
  )


}

export default App
