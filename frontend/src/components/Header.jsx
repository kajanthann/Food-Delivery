import React from 'react'

const Header = () => {
    const bgStyle = {
        backgroundImage: "url('src/assets/header_img.png')", // Correct path
        backgroundRepeat: 'no-repeat', // Separate property
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Use 'center' instead of 'relative'
        height: '60vh',
      };

  return (
    <div className='my-10' style={bgStyle}>
        <div className='flex mt-10 absolute flex-col items-start '>
            <h2 className='mt-20 text-white text-5xl '>Order your favourite food here</h2>
            <p className='p-5 mt-4 mx-auto text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi at id, repudiandae quam nulla accusantium tenetur quod porro consectetur, nesciunt eligendi illum fugiat eius? Nostrum minus non quibusdam minima nisi!</p>
            <button className='mt-10 bg-white py-2 px-4 rounded-full border border-red-500 hover:bg-rose-300'>View Menu</button>
        </div>
    </div>
  )
}

export default Header