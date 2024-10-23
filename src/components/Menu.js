import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Special from "./Special";
import FilteredDishes from "./FilteredDishes";
import Footer from "./Footer";
import Popup from "./Popup";
import Checkout from "./Checkout";
import AllMenuContext from "./AllMenuContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CheckoutContext from "../checkout/CheckoutContext";


function Menu() {
    let [showPopup, setShowPopup] = useState(false);
    let [currentDish, setCurrentDish] = useState(null);

    return (
        <>
            <Router>
                <CheckoutContext>
                    <Hero />
                    {showPopup && <Popup
                        currentDish={currentDish}
                        setShowPopup={setShowPopup}
                    />}

                    <Routes>
                        <Route path="/" element={
                            <AllMenuContext>
                                <Special setShowPopup={setShowPopup} setCurrentDish={setCurrentDish} />
                                <FilteredDishes setShowPopup={setShowPopup} setCurrentDish={setCurrentDish} />
                            </AllMenuContext>
                        } />

                        <Route path="/cart" element={<Checkout setCurrentDish={setCurrentDish} setShowPopup={setShowPopup} />} />
                    </Routes>

                    <Footer />
                </CheckoutContext>
            </Router>
        </>
    );
}

export default Menu;