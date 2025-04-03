import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const url = "http://localhost:4000"
  const [token,setToken] = useState('')
  const [cartItem, setCartItem] = useState({});

  const [food_list,setFoodList] = useState([])

  const addToCart = async (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Ensure default value is 0
    }));
    if (token) {
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] === 1) {
        // Remove item completely when count reaches 0
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
    if (token) {
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const getCartTotal = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const responce = await axios.get(url+"/api/food/list")
    setFoodList(responce.data.data)
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setCartItem(response.data.cartData)
  }

  useEffect(() => {
    
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        await loadCartData(localStorage.getItem("token"))
      } 
  
    }
    loadData();
    
  },[])

  const contextValue = {
    food_list,
    cartItem,
    addToCart,
    removeFromCart,
    getCartTotal,
    url,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
