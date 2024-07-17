import React from 'react';

import { Button } from "flowbite-react";
import { navigate } from "gatsby";

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import useData from "../hooks/useData";
import useUser from "../hooks/useUser";

import useVehicle from "../hooks/useVehicle";

const VehiclesTemplate = ({ params }) => {
    const { data } = useData();
    const { user } = useUser();
    const { vehicle } = useVehicle(data?.id, params['*']);

    const handlePurchase = async () => {
        if (data.id === 'NONE') {
            alert('You cannot purchase on our demo page. :D');
            return;
        }

        if (!user) {
            await navigate('/login')
            localStorage.setItem('redirect', `/vehicles/${ params['*'] }`);
        }
    };

    if (!data || !vehicle) {
        return <Loading/>;
    }

    return (
        <Layout data={ data } user={ user }>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                <div className="w-full max-w-4xl">
                    <img className="w-full h-auto object-cover object-center mb-4 rounded-lg shadow-md" src={ vehicle.image_url } alt={ vehicle.model }/>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h1 className="text-4xl font-bold mb-4 text-center">{ vehicle.model }</h1>
                        <h2 className="text-2xl text-gray-800 mb-4 text-center">${ vehicle.price }</h2>
                        <p className="text-gray-600 text-center mb-4">{ vehicle.year }</p>
                        <div className="flex justify-center">
                            <Button color="success" onClick={ handlePurchase } className="w-full md:w-auto">
                                Purchase
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default VehiclesTemplate;