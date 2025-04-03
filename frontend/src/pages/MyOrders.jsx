import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const MyOrders = () => {

    const {url,token} = useContext(StoreContext)
    const [data,setData] = useState([])

    const fetchOrders = async () => {
        const responce = await axios.post(url+"/api/order/userorders",{},{headers:token});
        setData(responce.data.data);
        console.log(responce.data.data);
        
    }

    useEffect(() => {
        if (token) {
            fetchOrders()
        }
    },[token])


  return (
    <div>

    </div>
  )
}

export default MyOrders