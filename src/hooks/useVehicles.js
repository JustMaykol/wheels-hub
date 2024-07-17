import { useEffect, useState } from 'react';

import axios from 'axios';
import { navigate } from "gatsby";

const defaultVehicles = [
    {
        car_id: "E3",
        image_url: "https://static.vecteezy.com/system/resources/previews/006/087/530/non_2x/silhouette-of-a-sports-car-side-view-vector.jpg",
        model: "Example Car 3",
        price: 30000,
        stock: 10,
        tenant_id: "HONDA",
    },
    {
        car_id: "E5",
        image_url: "https://static.vecteezy.com/system/resources/previews/006/087/530/non_2x/silhouette-of-a-sports-car-side-view-vector.jpg",
        model: "Example Car 5",
        price: 30000,
        stock: 10,
        tenant_id: "HONDA",
    },
    {
        car_id: "E1",
        image_url: "https://static.vecteezy.com/system/resources/previews/006/087/530/non_2x/silhouette-of-a-sports-car-side-view-vector.jpg",
        model: "Example Car 1",
        price: 30000,
        stock: 10,
        tenant_id: "HONDA",
    },
    {
        car_id: "E4",
        image_url: "https://static.vecteezy.com/system/resources/previews/006/087/530/non_2x/silhouette-of-a-sports-car-side-view-vector.jpg",
        model: "Example Car 4",
        price: 30000,
        stock: 10,
        tenant_id: "HONDA",
    },
    {
        car_id: "E2",
        image_url: "https://static.vecteezy.com/system/resources/previews/006/087/530/non_2x/silhouette-of-a-sports-car-side-view-vector.jpg",
        model: "Example Car 2",
        price: 30000,
        stock: 10,
        tenant_id: "HONDA",
    }
];

const useVehicles = (tenant_id) => {
    const [vehicles, setVehicles] = useState(null);

    useEffect(() => {
        if (!tenant_id) return

        if (tenant_id === 'NONE') {
            setVehicles(defaultVehicles);
            return;
        }

        const fetchCars = async () => {
            try {
                const response = await axios.get(`https://06v3og3ci7.execute-api.us-east-1.amazonaws.com/prod/cars/get?tenant_id=${ tenant_id }`);
                setVehicles(response.data.body);
            } catch (error) {
                setVehicles(null);
                await navigate('/404');
            }
        };

        fetchCars().then();
    }, [tenant_id]);

    return { vehicles };
};

export default useVehicles;
