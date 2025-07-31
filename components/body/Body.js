import Filters from "./Filters";
import Card from "./Card";
import { useState, useEffect } from "react";
import { SWIGGY_RESTAURANTS } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const fetchRestaurantsData = async () => {
    const data = await fetch(SWIGGY_RESTAURANTS);
    const jsonData = await data.json();

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterData = (allOrSome) => {
    if(allOrSome === "all"){
        setFilteredListOfRestaurants(listOfRestaurants)
    } else{
        setFilteredListOfRestaurants(filteredListOfRestaurants.filter((res) => res?.info?.avgRating >= 4.3))
    }
  }

    const filterSearchData = (value) => {
        if(value){
            setFilteredListOfRestaurants(filteredListOfRestaurants.filter((res) => res?.info?.name?.toLowerCase()?.includes(value?.toLowerCase())))
        } else{
            setFilteredListOfRestaurants(listOfRestaurants)
        }
   
    }

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Filters filterData={filterData} filterSearchData={filterSearchData}/>
      <h2 className="title">Restaurants</h2>
      <div className="res-container">
        {
            filteredListOfRestaurants.length === 0 ?  <h1>No Restaurants Found</h1> : filteredListOfRestaurants.map((res) => (
            <Link className="res-card" to={`/restaurants/${res.info.id}`} key={res.info.id}><Card resData={res} /></Link>
        ))
        }
   
      </div>
    </div>
  );
};

export default Body;
