import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col items-center' id='footer'>
        <div className='flex justify-betwen'>
            <div className=''>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vero vel fuga soluta perferendis placeat est unde ratione commodi in. </p>
                <div>
                    <p>h</p>
                    <p>h</p>
                    <p>h</p>
                </div>
            </div>
            <div className=''>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className=''>
                <h2>Get in Touch</h2>
                <ul>
                    <li>0772345763</li>
                    <li>example123@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p>@coptright</p>
    </div>
  )
}

export default Footer