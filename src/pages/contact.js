import React from 'react';

import Layout from "../components/Layout";
import Loading from '../components/Loading';

import useData from "../hooks/useData";

const Contact = () => {
    const { data } = useData();

    if (!data) {
        return <Loading/>;
    }

    return (
        <Layout data={ data }>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>
            </div>
        </Layout>
    );
}

export default Contact;