import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { navigate } from 'gatsby';
import axios from 'axios';
import Loading from '../../components/Loading';

const VehicleDetails = ({ params }) => {
    const { id } = params;

    console.log(id);

    return (
        <Layout>
        </Layout>
    );
}

export default VehicleDetails;
