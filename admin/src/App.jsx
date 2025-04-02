import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default App