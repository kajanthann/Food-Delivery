import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {


  const [list,setList] = useState([])

  const fetchList = async () => {
    const responce = await axios.get(`${url}/api/food/list`)
    
    if (responce.data.success) {

      setList(responce.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  },[])


  const removeFood = async(foodId) => {
    const responce = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (responce.data.success) {
      toast.success(responce.data.message)
    }
    else{
      toast.error("Error")
    }
    
  }

  return (
    <div>
      <p>Food List</p>
      <div>
        <div>
          <b>Image</b>
          <b>name</b>
          <b>category</b>
          <b>price</b>
          <b>Action</b>
        </div>
        {
          list.map((item,index) => {
              return (
                <div key={index}>
                    <img className='im' src={`${url}/images/` + item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.category}</p>
                    <p>${item.price}</p>
                    <p onClick={() => removeFood(item._id)}>X</p>
                </div>
              )
          })
        }
      </div>
    </div>
  )
}

export default List