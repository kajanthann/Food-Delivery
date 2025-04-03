import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';

const PayVerify = () => {
    
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const {url} = useContext(StoreContext)
    const navigate = useNavigate()
    
    const verufyPayment = async () =>{
        const responce = await axios.post(url+"/api/order/verify",{success,orderId})
        if (responce.data.success) {
            navigate("/myorders")
        }
        else{
            navigate("/")
        }
    }

    useEffect(() => {

        verufyPayment()
    },[])

  return (
    <div className='verify'>
        <div className='spinner'></div>
    </div>
  )
}

export default PayVerify