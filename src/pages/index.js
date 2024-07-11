import React from 'react';

import { Carousel } from 'flowbite-react';

import Layout from "../components/Layout";


const featuredImages = [
    {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Imagen destacada 1',
        title: 'Featured 1',
    },
    {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Imagen destacada 2',
        title: 'Featured 2',
    },
    {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Imagen destacada 3',
        title: 'Featured 3',
    },
];

const Index = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center">Welcome to Our Website</h1>

                <div className="mb-8">
                    <Carousel slideInterval={ 3000 }>
                        { featuredImages.map((image, index) => (
                            <div key={ index }>
                                <img src={ image.src } alt={ image.alt } className="block w-full h-auto"/>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-75 text-white">
                                    <p className="text-center">{ image.title }</p>
                                </div>
                            </div>
                        )) }
                    </Carousel>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Featured Images</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        { featuredImages.map((image, index) => (
                            <div key={ index } className="flex flex-col items-center">
                                <img src={ image.src } alt={ image.alt } className="mb-2"/>
                                <p className="text-lg font-semibold">{ image.title }</p>
                            </div>
                        )) }
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-center mb-4">Customer Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        { testimonials.map((testimonial, index) => (
                            <div key={ index } className="flex flex-col items-center p-4 border rounded-lg shadow-md">
                                <img src={ testimonial.image } alt={ testimonial.name } className="w-24 h-24 rounded-full mb-4"/>
                                <p className="text-lg font-semibold mb-2">{ testimonial.name }</p>
                                <p className="text-center">{ testimonial.comment }</p>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;