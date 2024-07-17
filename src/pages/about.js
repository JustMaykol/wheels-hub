import React from 'react';

import Layout from "../components/Layout";
import Loading from '../components/Loading';

import useData from "../hooks/useData";
import useUser from "../hooks/useUser";

const About = () => {
    const { data } = useData();
    const { user } = useUser();

    if (!data) {
        return <Loading/>;
    }

    return (
        <Layout data={ data } user={ user }>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
                <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg border-2 border-gray-200">
                    <h1 className="text-4xl font-bold text-center mb-8" style={ { color: data.color } }>About</h1>
                    <p className="text-lg leading-relaxed whitespace-pre-line text-center text-gray-700">
                        { data.about }
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default About;