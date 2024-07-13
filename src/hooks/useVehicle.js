import { useEffect, useState } from 'react';

import axios from 'axios';
import { navigate } from "gatsby";

const useVehicle = (tenant_id, car_id) => {
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        if (!tenant_id) return

        const fetchCars = async () => {
            try {
                const response = await axios.get(`https://06v3og3ci7.execute-api.us-east-1.amazonaws.com/prod/cars/get?tenant_id=${ tenant_id }&car_id=${ car_id }`);
                setVehicle(response.data.body);
            } catch (error) {
                setVehicle(null);
                await navigate('/404');
            }
        };

        fetchCars().then();
    }, [tenant_id]);

    return { vehicle };
};

export default useVehicle;
