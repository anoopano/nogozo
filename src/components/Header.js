import React from 'react';
import './Header.css';
import logo from '../images/logo.png';
import { FaSistrix, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="logo" />
            </Link>
            <div className="header__input">
                <FaSistrix className="searchIcon" />
                <input type="text" placeholder="Search Items" />
            </div>
            <div className="header__icons">
                <Link to="/checkout">
                    <FaShoppingCart className="header__icons-icon" />
                </Link>
                <FaUser className="header__icons-icon" />
            </div>
        </div>
    )
}

export default Navbar
