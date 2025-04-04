import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopup from './components/LoginPopup'
import PayVerify from './pages/PayVerify'
import MyOrders from './pages/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='px-10'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<PayVerify />} />
        <Route path='/myorders' element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App