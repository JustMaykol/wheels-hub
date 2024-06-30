import React from 'react';
import { Link } from 'gatsby';

const Car_card = ({ model, year, price, image, link }) => {
    return (
        <Link to={link} className="car-card">
            <img src={image} alt={model} style={{ width: '100%' }} />
            <h1>{model}</h1>
            <h2>{price}$</h2>
            <p>{year}</p>
        </Link>
    );
}

export default Car_card;
