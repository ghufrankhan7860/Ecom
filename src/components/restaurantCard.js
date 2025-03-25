import { restaurantCloudinaryImageURL } from "./config";

import {NavLink} from 'react-router';



const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines, locality, areaName, id }) => {
    
    return (

        <div className='card'>

                <div className="image-container">
                    <img src={restaurantCloudinaryImageURL + cloudinaryImageId} alt="res-logo" />
                    <div className="fade-box"></div>
                </div>
                
                <h2>{name}</h2>
                <h3>{"Rating : "+avgRating}</h3>
                <h4>{"Cuisines :"+cuisines.join(", ")}</h4>

        </div>
    )
}

export default RestaurantCard;