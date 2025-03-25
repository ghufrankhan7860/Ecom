import React from 'react';
import ReactDOM from 'react-dom/client';

// default imports
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import RestaurantMenu from './components/RestaurantMenu';

// named imports
import {BrowserRouter, Routes, Route, Outlet} from 'react-router';

import Error from './components/errorPage';

const App = () => {
    // React.Fragments
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Body />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="restaurant/:resId" element={<RestaurantMenu />} />
                {/* This route handles the error, if there is any error that pops up */}
                <Route path="*" element = {<Error/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

