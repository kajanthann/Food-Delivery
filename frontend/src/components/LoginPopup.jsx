import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false); // Added Loader State

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    let newUrl = `${url}/api/user/${currState === "Login" ? "login" : "register"}`;

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{currState}</h2>
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="cursor-pointer h-6"
        />
      </div>

      {/* Form */}
      <form onSubmit={onLogin} className="space-y-4">
        {/* Name Input (Only for Sign Up) */}
        {currState !== "Login" && (
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            className="w-full border p-2 rounded"
            type="text"
            placeholder="Your Name"
          />
        )}

        {/* Email Input */}
        <input
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          className="w-full border p-2 rounded"
          type="email"
          placeholder="Your Email"
          required
        />

        {/* Password Input */}
        <input
          name="password"
          onChange={onChangeHandler}
          value={data.password}
          className="w-full border p-2 rounded"
          type="password"
          placeholder="Your Password"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          disabled={loading}
        >
          {loading ? "Processing..." : currState === "sign up" ? "Create Account" : "Login"}
        </button>
      </form>

      {/* Toggle Login / Signup */}
      <div className="mt-4 text-center text-sm text-gray-600">
        {currState === "Login" ? (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setCurrState("sign up")}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Sign up here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-red-500 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;
