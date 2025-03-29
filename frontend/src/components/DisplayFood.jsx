import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const DisplayFood = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mt-10" id="food-display">
      <h1 className="text-3xl">Top dishes near you</h1>
      <div className="grid grid-cols-4 gap-5  ">
        {food_list.map((item, index) => {
          if ((category ==="All" || category === item.category)) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default DisplayFood;
