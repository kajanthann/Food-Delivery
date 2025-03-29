import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const {getCartTotal} = useContext(StoreContext)

  return (
    <form action="">
      <div>
        <p>Delivery information</p>
        <div>
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='last Name'/>
        </div>
        <input type="email" placeholder='Email Address' name="" id="" />
        <input type="text" placeholder='Street' name="" id="" />
        <div>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone number' name="" id="" />
      </div>


      <div>
      <div>
          <h2>Cart Total</h2>
          <div>
            <div>
              <p>Sub Total</p>
              <p>{getCartTotal()}</p>
            </div>
            <hr />
            <div>
              <p>Delivery Fee</p>
              <p>{getCartTotal() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div>
              <p>Total</p>
              <p>{getCartTotal() === 0 ? 0 : getCartTotal() +2}</p>
            </div>
            <button className='bg-amber-600'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder