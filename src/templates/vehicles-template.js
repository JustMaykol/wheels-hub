import React from 'react';

const VehiclesTemplate = ({ params }) => {
    console.log(params['*']);

    return (
        <div>{ params['*'] }</div>
    );
}

export default VehiclesTemplate;