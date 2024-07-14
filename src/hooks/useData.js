import { useEffect, useState } from 'react';

import { navigate } from "gatsby";

const useData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const domain = "nissan";

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
