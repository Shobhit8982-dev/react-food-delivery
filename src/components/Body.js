import RestaurantCard from "./RestaurantCard";
import { resList, restaurantList1 } from "../Utils/mockData";
import { useState, useEffect } from "react";
import { API_URL } from "../Utils/constants";
import { Shimmer } from "./Shimmer";
import { Link, useParams } from "react-router-dom";
export const Body = () => {
  // console.log("resList in body", resList);
  const [searchText, setSearchText] = useState("");
  // const params = useParams();
  // console.log(params)
  // const { resId } = useParams();
  const [listOfRestaurants, setListOfRestaurants] = useState(
    // resList.restaurants   // IF I KEEP THIS MOCK DATA THEN IT WILL SHOW THAT DATA FIRST BEFORE API LOADS
    //  API
    // []     // THIS WILL BE THE FINAL STATE AFTER API CALL
    restaurantList1.restaurants  // THIS WILL SHOW MOCK DATA FIRST THEN API DATA WILL LOAD
  );
  useEffect(() => {
    const fetchData = async () => {
      // try{
      // const data = await fetch(`https://corsproxy.io/?url=${API_URL}`);
      const data = await fetch(`${API_URL}`);
      const json = await data.json();
      // console.log(json,'fetchdata'); 
      //             console.log(json?.data, 'data');
      // console.log(json?.data?.cards[4], 'cardsss');
      // console.log(json?.data?.cards[4]?.card, 'card');
      // console.log(json?.data?.cards[4]?.card?.card, 'nested card');
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements, 'gridElements');
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle, 'infoWithStyle');
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0], 'restaurants');
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info, 'info');
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name,"name");
      // let API = (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
      // const restaurantCard = json?.data?.cards.find(
      //   (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []; 
      // setListOfRestaurants(restaurants); // <-- THIS IS AN ARRAY
 
      // OR ALTERNATIVE WAY
      // setListOfRestaurants(json?.data?.cards.find(c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      //                      ?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);

      // console.log(json?.data?.cards?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name, 'name');
      // }
      // catch{
      //     console.log('not able to fetch api data')
      // }
    };
    fetchData();
  }, []);

  // const [searchText, setSearchText] = useState("");
  // const [listOfRestaurants, setListOfRestaurants] = useState(
  //   // resList.restaurants
  //   //  API
  //   []
  // );

  const filteredTopRestaurants = () => {
    // const initialListOfRestaurants = listOfRestaurants
    const filterList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    setListOfRestaurants(filterList);
  };
  const filteredRestaurants = listOfRestaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
      const search = listOfRestaurants.filter((x) => (x.info.name).toLowerCase().includes(searchText.toLowerCase()));
      setListOfRestaurants(search)
  }
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="m-2 p-2 border-2">
        <input
          className="border-2"
          type="text"
          placeholder=" Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="bg-green-500 p-2 m-2 rounded-lg text-white"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
        <button
          className="bg-green-500 p-2 m-2 rounded-lg"
          onClick={() => {
            filteredTopRestaurants();
          }}
        >
          Top Restaurant
        </button>
        <button className="bg-red-500 p-2 m-2 rounded-lg"
          onClick={() => {
            setListOfRestaurants(listOfRestaurants);
            setSearchText("");
          }}
        >Reset</button>
      </div>
      <div className="flex flex-wrap" >  
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id}  to ={'/restaurant/' + restaurant.info.id}>
          <RestaurantCard   resObj={restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
