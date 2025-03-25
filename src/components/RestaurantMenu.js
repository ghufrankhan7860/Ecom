import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { restaurantCloudinaryImageURL } from './config';

const ShimmerRestaurantMenu = () => {

    return (
        <div>
            <div className="shimmer-wrapper">
                <div className="shimmer"></div>
            </div>
        </div>
    )
}

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resData, setResData] = useState({});
    const restaurant = useLocation().state;

    console.log(restaurant);
    useEffect(() => {
        // fectch restaurant menu from the server
        getResDetails();
    }, []);

    const getResDetails = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.624462&lng=77.057731&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

        const json = await data?.json();
        setResData(json);
        console.log(json);
    }

    const menuStyle = {
        'color': 'black',
        'font-size': '2rem',
        'font-weight': 'bold',
        'text-align': 'center'
    }

    return (
        <div>
            <h1>Restaurant Menu</h1>
            {resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((items) => {
                items.name
            })}

            {console.log("Rendered!")}
            <img src={restaurantCloudinaryImageURL + restaurant?.cloudinaryImageId} alt="restaurant" className="res-menu-banner" />
            <p>Restaurant ID: {restaurant.id}</p>
            <p>Restaurant Name: {restaurant.name}</p>
            <p>Locality: {restaurant.locality}</p>
            <p>Area Name: {restaurant.areaName}</p>
            <h1 style={menuStyle}>Menu</h1>
            <div className="menu-items">
                {(resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map((item) => (
                    console.log(item.card.info.name),
                    <li key={item.card.info.id}>{item.card.info.name}</li>
                )))}
            </div>
        </div>
    )
}

export default RestaurantMenu;