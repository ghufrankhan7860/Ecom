// named imports
import { restaurantListApi as rAPI} from "./config";
import {useEffect, useState} from 'react';
import { ShimmerCards } from "./shimmer";
import {NavLink} from 'react-router';

// default imports
import RestaurantCard from "./restaurantCard";

const filterRestaurants = (search, restaurants)=>{
    const filterData = restaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filterData);
    return filterData;
}

const Body = ()=>{
    const [search, setSearch] = useState();
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState();

    useEffect(()=>{
        getRestaurants();
    }, []);

    const getRestaurants = async ()=>{
        const data = await fetch(rAPI);
        const json = await data.json();
        // console.log(json);
        setAllRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // // early return (Not rendered)
    // if(!allRestaurants) return null;

    return (allRestaurants?.length == 0) ?
     (
        <div className="shimmer-container">
            <ShimmerCards/>         
            
        </div>
    ) 
     :(
        <>
            <div className="search-container">
                <input type="text" placeholder="Search" className="search-bar" value={search} onChange={(e)=>{
                    setSearch(e.target.value);
                    
                }}  
                onKeyDown={(e)=>{
                    if(e.key === 'Enter'){
                        const newRes = filterRestaurants(search, allRestaurants);
                        setFilteredRestaurants(newRes);
                        
                    }
                }}
                />
                <button className="search-btn" onClick={()=>{
                    const newRes = filterRestaurants(search, allRestaurants);
                    setFilteredRestaurants(newRes);
                    
                }}  >Search</button>
            </div>

            <div className="restaurant-list" >
                {
                    (filteredRestaurants?.length === 0) ?(
                        <div className="no-restaurants">
                            <h2>No restaurants match your search!</h2>
                            <p>Please try a different search term.</p>
                        </div>
                    ):
                    (filteredRestaurants.map((restaurant)=>{
                        // ... destructuring
                        return (<NavLink to={"restaurant/"+restaurant.info.id} state={restaurant.info} key={restaurant.info.id}><RestaurantCard {...restaurant.info} key={restaurant.info.id}/></NavLink>)
                    }))
                    
                }
            
            </div>        

        </>
    )
}


export default Body;