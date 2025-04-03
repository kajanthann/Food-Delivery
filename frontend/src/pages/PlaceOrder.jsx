import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getCartTotal,token,food_list,cartItem,url } = useContext(StoreContext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems =[];
    food_list.map((item) => {
      if (cartItem[item._id]) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address:data,
      items:orderItems,
      amount:getCartTotal()+2,
    }

    let responce = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
    if (responce.data.success) {
      const {session_url} = responce.data;
      window.location.replace(session_url);
    }
    else{
      alert("error")
    }
    
  }


  return (
    <form onSubmit={placeOrder} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col  md:flex-row gap-8">
        {/* Delivery Information */}
        <div className="w-full md:w-2/3">
          <p className="text-2xl font-semibold mb-5">Delivery Information</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First Name"
              className="border p-2 rounded-md w-full"
            />
            <input
              required
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last Name"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <input
            required
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email Address"
            className="border p-2 rounded-md w-full mt-4"
          />
          <input
            required
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            placeholder="Street"
            className="border p-2 rounded-md w-full mt-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              required
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              placeholder="City"
              className="border p-2 rounded-md w-full"
            />
            <input
              required
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              placeholder="State"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              required
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              placeholder="Zip Code"
              className="border p-2 rounded-md w-full"
            />
            <input
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              placeholder="country"
              className="border p-2 rounded-md w-full"
            />
          </div>
          <input
            required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone Number"
            className="border p-2 rounded-md w-full mt-4"
          />
        </div>

        {/* Cart Total Section */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Sub Total</p>
              <p>${getCartTotal().toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getCartTotal() === 0 ? "0.00" : "2.00"}</p>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>${getCartTotal() === 0 ? "0.00" : (getCartTotal() + 2).toFixed(2)}</p>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white py-2 rounded-md mt-4 hover:bg-amber-700 transition">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
