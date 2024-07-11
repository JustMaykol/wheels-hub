import React, { useState } from 'react';

import Layout from "../components/Layout";
import Loading from "../components/Loading";
import useTenantData from "../hooks/useData";

import { Link } from "gatsby";
import { featuredImages } from "./index";

const Vehicles = () => {
    // const [cars, setCars] = useState([]);
    const { data, loading } = useTenantData();

    if (loading) {
        return <Loading/>;
    }


    return (
        <Layout data={ data }>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Vehicles</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { featuredImages.map(car => (
                        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img src={ car.src } alt={ car.title } className="w-full h-auto mb-4"/>
                            <h2 className="text-2xl font-bold mb-2">{ car.title }</h2>
                            <p className="text-lg mb-4">Price: { car.price }</p>
                            <Link to={ `/vehicles/${ car.title }` } className="text-blue-500 hover:text-blue-700">View Details</Link>
                        </div>
                    )) }
                </div>
            </div>
        </Layout>
    );
}

export default Vehicles;