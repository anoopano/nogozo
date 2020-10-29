import React from 'react';
import './HomePage.css';
import veg from '../images/vegetables.jpg';
import groceries from '../images/groceries.jpeg';
import fashion from '../images/lifestyle.jpeg';
import electronics from '../images/electronics.jpeg';
import food from '../images/food.jpeg';
import statinary from '../images/stationary.jpeg';
import dairy from '../images/dairy.jpeg';
import special from '../images/special.jpeg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function HomePage() {
    const [itemCategory, setItemCategory] = useState("");

    const CATEGORIES = [
        {
            ID: "vegetables",
            image: veg,
            description: "Fruits & Vegetables"
        },
        {
            ID: "groceries",
            image: groceries,
            description: "Groceries & Essentials"
        },
        {
            ID: "food",
            image: food,
            description: "Food Outlets & Restaurants"
        },
        {
            ID: "stationary",
            image: statinary,
            description: "Statinary & Books"
        },
        {
            ID: "fashion",
            image: fashion,
            description: "Fashion & Personal Care"
        },
        {
            ID: "electronics",
            image: electronics,
            description: "Electrical & Electronics"
        },
        {
            ID: "dairy",
            image: dairy,
            description: "Dairy products"
        },
        {
            ID: "specials",
            image: special,
            description: "Nogozo Specials"
        }
    ]

    function categorySetFn(item) {
        setItemCategory(item)
    }
    return (
        <div className="homePage">
            <p>India's First Local Market E-Commerce Company.</p>
            <div className="homePage__items">
                {
                    CATEGORIES.map(category => (
                        <Link className="homePage__items-link" to={`/category/${category.ID}`} onClick={() => categorySetFn(category.ID)}>
                            <div className="homePage__items-item">
                                <img src={category.image} alt={category.description} />
                                <p>{category.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default HomePage
