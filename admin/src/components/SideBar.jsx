import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
      <div>
        <NavLink to='/add'>
          <img src={assets.add_icon} alt="" />
          <p>Add item</p>
        </NavLink>
        <NavLink to='/list'>
          <img src={assets.order_icon} alt="" />
          <p>list item</p>
        </NavLink>
        <NavLink to='/orders'>
          <img src={assets.order_icon} alt="" />
          <p>orderd item</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SideBar