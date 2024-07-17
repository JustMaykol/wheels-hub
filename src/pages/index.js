import React from 'react';

import { Carousel } from 'flowbite-react';

import Layout from "../components/Layout";
import Loading from '../components/Loading';

import useData from "../hooks/useData";
import useUser from "../hooks/useUser";

import useVehicles from "../hooks/useVehicles";

import { Link } from "gatsby";

const Index = () => {
    const { data } = useData();
    const { user } = useUser();
    const { vehicles } = useVehicles(data?.id);

    if (!data || !vehicles) {
        return <Loading/>;
    }

    const featured = vehicles.slice(2, 5);

    return (
        <Layout data={ data } user={ user }>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Welcome to Our Website</h1>

                <div className="mb-16 flex justify-center">
                    <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2">
                        <Carousel>
                            { data.carousel.map((image) => (
                                <div className="relative">
                                    <img src={ image.url } alt={ image.alt } className="block w-full h-auto"/>
                                </div>
                            )) }
                        </Carousel>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-6">Featured Images</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        { featured.map(car => (
                            <Link to={ `/vehicles/${ car.car_id }` } className="flex flex-col items-center rounded-lg p-3 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-full h-40 overflow-hidden flex items-center justify-center mb-3">
                                    <img src={ car.image_url } alt={ car.model } className="object-contain w-full h-full rounded"/>
                                </div>
                                <p className="text-md font-semibold">{ car.model }</p>
                                <p className="text-md font-semibold mt-1 text-yellow-300">${ car.price }</p>
                            </Link>
                        )) }
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>

                    <div className="flex justify-center">
                        <div className="w-full h-64 md:h-96 lg:w-3/4 lg:h-72 mx-auto rounded-lg overflow-hidden shadow-lg">
                            <iframe title="Google Maps" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15605.095819436677!2d-77.0505357191229!3d-12.046374871580071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c88ee27c9921%3A0x4a52b9a6e8f2e5a1!2sLima%2C%20Peru!5e0!3m2!1sen!2sus!4v1623859823420!5m2!1sen!2sus" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;