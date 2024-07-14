import React from 'react';

import Loading from "../components/Loading";

import useData from "../hooks/useData";
import useVehicle from "../hooks/useVehicle";

const VehiclesTemplate = ({ params }) => {
    const { data } = useData();
    const { vehicle } = useVehicle(data?.id, params['*']);

    if (!data || !vehicle) {
        return <Loading/>;
    }

    return (
        <div>{ params['*'] }</div>
    );
}

export default VehiclesTemplate;