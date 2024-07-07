import { useEffect, useState } from 'react';

const useTenantData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const subdomain = "nissan";
            const cachedData = localStorage.getItem(subdomain);

            if (cachedData) {
                setData(JSON.parse(cachedData));
                setLoading(false);
            } else {
                try {
                    const response = await fetch(`/${ subdomain }.json`);
                    const data = await response.json();

                    localStorage.setItem(subdomain, JSON.stringify(data));
                    setData(data);
                    setLoading(false);
                } catch (error) {
                    console.error("Failed to fetch tenant data:", error);
                    setLoading(false);
                }
            }
        };

        fetchData().then();
    }, []);

    return { data, loading };
};

export default useTenantData;
