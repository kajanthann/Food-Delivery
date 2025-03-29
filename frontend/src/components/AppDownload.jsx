import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='' id='app-download'>
        <p>For Exprience Download <br /> tomato app</p>
        <div>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload