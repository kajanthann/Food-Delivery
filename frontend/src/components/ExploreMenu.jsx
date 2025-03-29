import React from 'react'
import { menu_list } from '../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='flex gap-6 flex-col' id='exploreMenu'>
        <h1 className='text-2xl text-red-900'>Explore our Menu</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quod officiis sequi? Facere minima numquam illum molestiae dignissimos nulla, qui perferendis quam amet recusandae, repudiandae ?</p>
        <div className='flex gap-10 justify-between items-center m-10 overflow-scroll'>
            { menu_list.map((item,index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='cursor-pointer'>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='m-5 h-1 border-1'  />
    </div>
  )
}

export default ExploreMenu