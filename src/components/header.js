import { LogoURL } from "./config";
import {useState} from 'react';
import {NavLink} from 'react-router';

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <img alt="brand-logo" src={LogoURL} className="logo"/>

            <ul className="navbar">
                <NavLink to="/" className='home-btn'>Restaurants</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact" end>Contact</NavLink>

            </ul>

            {   
                // in these curly braces, we can only "write javascript exressions not js statements", so we can't write if else statements here
                (isLoggedIn) ? <button className="authenticate-btn" onClick={()=>setIsLoggedIn(false) }>Logout</button> : <button className="authenticate-btn"  onClick={()=>setIsLoggedIn(true)}>Login</button>
            }
            
        </div>
    )
}

export default Header;