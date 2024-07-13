import React from 'react';

import { Spinner } from "flowbite-react";

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <Spinner size='xl' aria-label='Loading...'/>
        </div>
    );
}

export default Loading;