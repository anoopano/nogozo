import React from 'react';
import stores from '../data/stores.json';
import { ImLocation } from 'react-icons/im';
import './ShopProfile.css';

function ShopProfile({ itemCategory }) {
    return (
        <div className="shopProfile">
            {
                stores.map(store => (
                    (store.type === itemCategory) ?
                        <div className="shopProfile__card">
                            <h3>{store.name}</h3>
                            <div><ImLocation className="shopProfile__icon"/> {store.location}</div>
                        </div> : null
                ))
            }
        </div>
    )

}


export default ShopProfile
