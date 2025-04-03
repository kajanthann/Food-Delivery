import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItem,food_list,removeFromCart,getCartTotal,url} = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div>
      <div>
        <div className='flex'>
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index) => {
            // if(cartItem[item._id] > 0){
            if(cartItem[item.id] > 0){
              return (
                <div className='flex gap-3'>
                  <img className='w-28' src={url+ "/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)}>x</p>
                </div>
              )
            }
          })
        }
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
              <p>{getCartTotal() === 0 ? 0 : (getCartTotal() +2)}</p>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED To CHECK OUT</button>
          </div>
          <div>
            <div>
              <p>If you have promocode, enter it here</p>
              <div>
                <input className='border rounded-lg p-1' type="text" placeholder='Type promocode' />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart