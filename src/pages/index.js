import React from 'react';

import { Carousel } from 'flowbite-react';

import Map from '../components/Map';
import Layout from "../components/Layout";
import Loading from '../components/Loading';
import Featured from "../components/Featured";

import useTenantData from "../hooks/useData";

export const featuredImages = [
    {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Imagen destacada 1',
        title: 'Featured 1',
        price: '$100',
    },
    {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Imagen destacada 2',
        title: 'Featured 2',
        price: '$200',
    },
    {
        src: 'https://via.placeholder.com/800x400',
        alt: 'Imagen destacada 3',
        title: 'Featured 3',
        price: '$300',
    },
];

const Index = () => {
    const { data, loading } = useTenantData();

    if (loading) {
        return <Loading/>;
    }

    const parts = [
        {
            title: 'Featured Images',
            action: <Featured images={ featuredImages } color={ data.colors.primary }/>
        },
        {
            title: 'Our Location',
            action: <Map/>
        }
    ]

    return (
        <Layout data={ data }>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Website</h1>

                <div className="mb-16 flex justify-center">
                    <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2">
                        <Carousel>
                            { featuredImages.map((image) => (
                                <div className="relative">
                                    <img src={ image.src } alt={ image.alt } className="block w-full h-auto"/>
                                </div>
                            )) }
                        </Carousel>
                    </div>
                </div>

                { parts.map((part) => (
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-6">{ part.title }</h2>
                        { part.action }
                    </div>
                )) }
            </div>
        </Layout>
    );
}

export default Index;