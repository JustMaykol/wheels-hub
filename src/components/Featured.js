import React from 'react';
import { Link } from "gatsby";

const Featured = ({ images, color }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            { images.map((image) => (
                <Link to={ image.title } className='flex flex-col items-center'>
                    <div className="w-full sm:w-1/2 md:w-3/4 lg:w-1/2">
                        <img src={ image.src } alt={ image.alt } className="rounded mb-2"/>
                    </div>
                    <p className="text-lg font-semibold">{ image.title }</p>
                    <p className="text-lg font-semibold mt-2" style={ { color: color } }>{ image.price }</p>
                </Link>
            )) }
        </div>
    );
}

export default Featured;