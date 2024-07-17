import React from 'react';

import Layout from '../../components/Layout';
import Loading from "../../components/Loading";

import useData from "../../hooks/useData";
import useUser from "../../hooks/useUser";

import useVehicles from "../../hooks/useVehicles";

import { Link } from "gatsby";

const Vehicles = () => {
    const { data } = useData();

    const { user } = useUser(data?.id);
    const { vehicles } = useVehicles(data?.id);

    if (!data || !vehicles) {
        return <Loading/>;
    }

    return (
        <Layout data={ data } user={ user }>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-black dark:text-white text-4xl font-bold mb-16">Vehicles</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { vehicles.map(car => (
                        <Link to={ `/vehicles/${ car.car_id }` }>
                            <div className="border rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                <div className="w-full h-48 overflow-hidden flex items-center justify-center mb-2">
                                    <img src={ car.image_url } alt={ car.model } className="object-contain w-full h-full"/>
                                </div>

                                <h2 className="text-black dark:text-white text-xl font-bold mb-2">{ car.model }</h2>
                                <p className="text-black dark:text-white text-base mb-3">Price: { car.price }</p>
                            </div>
                        </Link>
                    )) }
                </div>
            </div>
        </Layout>
    );
}

export default Vehicles;
