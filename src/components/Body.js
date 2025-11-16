import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../Utils/constants";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${API_URL}`);
        const json = await data.json();

        const restaurantCard = json?.data?.cards.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
          [];

        setListOfRestaurants(restaurants);
        setAllRestaurants(restaurants);
      } catch (error) {
        console.log("Not able to fetch API data", error);
      }
    };
    fetchData();
  }, []);

  const filteredTopRestaurants = () => {
    const topList = allRestaurants.filter((res) => res.info.avgRating > 4.5);
    setListOfRestaurants(topList);
  };

  const filteredRestaurants = listOfRestaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="m-2 p-2 border-2">
        <input
          className="border-2"
          type="text"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="bg-green-500 p-2 m-2 rounded-lg text-white"
          onClick={() => {}}
        >
          Search
        </button>

        <button
          className="bg-green-500 p-2 m-2 rounded-lg"
          onClick={filteredTopRestaurants}
        >
          Top Restaurants
        </button>

        <button
          className="bg-red-500 p-2 m-2 rounded-lg text-white"
          onClick={() => {
            setListOfRestaurants(allRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard resObj={restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
