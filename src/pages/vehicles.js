import React from 'react';
import Layout from "../components/layout";
import Car_card from '../components/car_card';

const cars = [
    {
        "model": "All New Civic",
        "year": 2023,
        "price": 20000,
        "image": "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/civic-type-r/non-VLP/Global-Nav--Inventory/MY24-Civic-Type-R-non-VLP-nav-2x.png"
    },
    {
        "model" : "All New Accord",
        "year" : 2023,
        "price" : 40000,
        "image" : "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Non-VLP/NAV/MY24_Honda_Accord_LX_Current-Offers-Card_657x283.png?sc_lang=en&hash=CB46FD8863FC0E32C9A9F013B7B3C085"
    },
    {
        "model" : "All New CR-V",
        "year" : 2023,
        "price" : 30000,
        "image" : "https://d31sro4iz4ob5n.cloudfront.net/upload/car/cr-v-2023/thumbnail/cr-v-2023-lhd-ex-l.png"
    }
];

function Vehicles() {
    return (
        <Layout>
            <h1 style={{paddingBottom : "20px"}}>See all the vehicles available, click for more information.</h1>
            <div className="car-container">
                {cars.map((car, index) => (
                    <Car_card 
                        key={index} 
                        model={car.model} 
                        year={car.year} 
                        price={car.price} 
                        image={car.image} 
                        link={`/${car.model.replace(/\s+/g, '-')}`}
                    />
                ))}
            </div>
        </Layout>
    );
}

export default Vehicles;
