import React from 'react';
import './Header.css';
import logo from '../images/logo.png';
import { FaSistrix, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';


function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            <div className="navbar__input">
                <FaSistrix className="searchIcon" />
                <input type="text" placeholder="Search Items" />
            </div>
            <div className="navbar__icons">
                <Link to="/checkout">
                    <FaShoppingCart className="navbar__icons-icon" />
                </Link>
                <FaUser className="navbar__icons-icon" />
            </div>
        </div>
    )
}

export default Navbar
