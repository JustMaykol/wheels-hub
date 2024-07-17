import { useState } from 'react';

import axios from 'axios';

const usePurchase = () => {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    const purchase = async (tenant_id, user, vehicle) => {
        setMessage(null);
        setLoading(true);

        if (vehicle.price > user.wallet) {
            setMessage("Insufficient Funds");
            setLoading(false);
            return
        }

        if (vehicle.stock < 1) {
            setMessage("Out of Stock");
            setLoading(false);
            return
        }

        user.wallet = user.wallet - vehicle.price;
        vehicle.stock = vehicle.stock - 1;

        localStorage.setItem(`${ tenant_id }_user`, JSON.stringify(user));

        const car_id = vehicle.car_id;
        const user_id = user.user_id;

        try {
            const response = await axios.post('https://ml3xtoudsj.execute-api.us-east-1.amazonaws.com/prod/purchases/create', {
                tenant_id,
                car_id,
                user_id
            });

            if (response.data.statusCode === 200) {
                setMessage("Purchase Successful");
            }
        } catch (error) {
            setMessage('Failed. Please try again.');
        }

        setLoading(false);
    }

    return { message, loading, purchase };
};

export default usePurchase;
