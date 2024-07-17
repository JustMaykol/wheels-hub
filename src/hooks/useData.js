import { useEffect, useState } from 'react';

import { navigate } from "gatsby";

const useData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const domain = "honda";

            const hostname = window.location.hostname;
            const tenant = hostname.split('.')[0];

            console.log(window.location.hostname)
            console.log(tenant)

            try {
                const response = await fetch(`/${ domain }.json`);
                const data = await response.json();

                setData(data);
            } catch (error) {
                setData(null)
                await navigate('/404');
            }
        };

        fetchData().then();
    }, []);

    return { data };
};

export default useData;
