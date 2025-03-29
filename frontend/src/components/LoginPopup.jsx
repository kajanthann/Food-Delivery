import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState('sign up')

  return (
    <div className=''>
        <form className='' action="">
            <div className=''>
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div>
                {currState === 'Login' ? <></> : <input type="text" placeholder='Your Name' name="" id="" />}
                
                <input type="email" placeholder='Your Email' name="" id="" />
                <input type="password" placeholder='Your password' name="" id="" />
            </div>
            <button>{currState === 'sign up' ? 'Create account' : 'Login'}</button>
            <div>
                <input type="checkbox" name="" id="" />
                <p>jnjk j cjweoc jcioe ion3ic jo3</p>
            </div>
            {
                currState === 'Login' ? <p>Create anew Account? <span onClick={() => setCurrState('sign up')}>Click here</span></p>:
                <p>Alread have an account? <span onClick={() => setCurrState('Login')}>login here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup