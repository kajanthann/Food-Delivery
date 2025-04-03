import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    const {removeFromCart,addToCart,cartItem,url} = useContext(StoreContext)

  return (
    <div className='p-5'>
        <div className='relative'>
            <img src={url+ "/images/"+image} alt="" />
            {!cartItem[id]
                ? <img className='w-5 absolute bottom-0' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                : <div className='w-5 absolute bottom-0 flex items-center'>
                    <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div>
            <div className='flex justify-between items-center px-2'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem