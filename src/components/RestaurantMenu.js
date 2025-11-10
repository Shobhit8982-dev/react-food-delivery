import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { menuData1 } from "../Utils/mockData";

const RestaurantMenu = () => {
  const { resId } = useParams(); // URL param (e.g. /restaurant/10576)
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    // Find restaurant by id
    const restaurant = menuData1.data.find(
      (r) => r.info.id === resId
    );

    // If found, store it in state
    if (restaurant) {
      setRestaurantMenu(restaurant);
    }
  }, [resId]);

  // Show loading text if data not loaded
  if (!restaurantMenu) {
    return <h2 className="text-center text-xl">Loading menu...</h2>;
  }

  return (
    <div className="p-4">
      <h1 className="text-red-500 text-4xl font-bold mb-2">
        {restaurantMenu.info.name}
      </h1>
      <h3 className="text-gray-600 mb-4">Restaurant ID: {restaurantMenu.info.id}</h3>

      <h2 className="text-2xl font-semibold mb-3">Menu</h2>
      <ul className="space-y-2 mb-18">
        {restaurantMenu.menu.map((item) => (
          <li
            key={item.card.info.id}
            className="border p-2 rounded-lg shadow-sm flex justify-between"
          >
            <div>
              <h4 className="font-medium">{item.card.info.name}</h4>
              <p className="text-sm text-gray-500">
                {item.card.info.category}
              </p>
              <p className="text-sm text-gray-400">
                {item.card.info.description}
              </p>
            </div>
            <span className="text-green-600 font-semibold">
              ₹{(item.card.info.price / 100).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
