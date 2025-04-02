import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("");

  const {getCartTotal,token,setToken} = useContext(StoreContext)

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate('/')
  }
  

  return (
    <div className="flex justify-between items-center bg-neutral-200 p-4">
      <Link to="/">
        <img className="" src={assets.logo} alt="Logo" />
      </Link>

      <ul className="hidden md:flex gap-4 cursor-pointer">
        <li>
          <Link
            to="/"
            onClick={() => setmenu("home")}
            className={menu === "home" ? "border-b-2 border-red-500" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#exploreMenu"
            onClick={() => setmenu("menu")}
            className={menu === "menu" ? "border-b-2 border-red-500" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setmenu("Mobile-App")}
            className={menu === "Mobile-App" ? "border-b-2 border-red-500" : ""}
          >
            Mobile-App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setmenu("Contact Us")}
            className={menu === "Contact Us" ? "border-b-2 border-red-500" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex gap-5 items-center">
        <img className="h-6" src={assets.search_icon} alt="Search" />
        <div className="relative h-6 px-1">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getCartTotal() === 0 ? "" : "min-w-2 min-h-2 top-0 right-0 bg-red-500 rounded-full absolute"}></div>
        </div>
        {
          !token? <button
          onClick={() => setShowLogin(true)}
          className="rounded-full bg-white border border-red-500 px-6 hover:text-white hover:bg-red-400 py-2"
        >
          Sign In
        </button> : (
          <div className="relative group">
          <img src={assets.profile_icon} alt="" className="cursor-pointer" />
          <ul className="absolute right-0 z-10 cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible flex flex-col gap-3 bg-white border rounded-lg transition-opacity duration-200">
            <li className="flex items-center gap-2 p-2 hover:bg-gray-200">
              <img src={assets.bag_icon} alt="" /> Orders
            </li>
            <hr />
            <li onClick={logOut} className="flex items-center mx-8 hover:bg-gray-200">
              <img src={assets.logout_icon} alt="" /> Logout
            </li>
          </ul>
        </div>
        
        )
        }
        
      </div>
    </div>
  );
};

export default Navbar;
