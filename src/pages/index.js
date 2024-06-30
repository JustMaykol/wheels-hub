// src/pages/index.js
import React from "react";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import { Link } from "gatsby";

const Index = () => {
    return (
        <Layout>
            <div style={{ textAlign: 'center', padding: '50px 20px', backgroundImage: 'url(/path/to/hero-image.jpg)', backgroundSize: 'cover', color: 'white' }}>
                <h1>Welcome to WheelsHub Honda</h1>
                <p>Your trusted dealership for new cars</p>
                <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    <Link to="/vehicles" style={{ color: 'inherit', textDecoration: 'none' }}>Explore Our Inventory</Link>
                </button>
            </div>

            <Carousel />

            <div style={{ padding: '50px 20px', textAlign: 'center' }}>
                <h2 style={{marginBottom : '40px'}}>Featured Vehicles</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ margin: '10px', width: '300px', border: '1px solid #ccc', padding: '20px' }}>
                        <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/accord-sedan/Non-VLP/NAV/MY24_Honda_Accord_LX_Current-Offers-Card_657x283.png?sc_lang=en&hash=CB46FD8863FC0E32C9A9F013B7B3C085" alt="Car 1" style={{ width: '100%' }} />
                        <h3>Honda Accord</h3>
                        <p>$40,000</p>
                        <Link to="/All-New-Accord" style={{ textDecoration: 'none', color: '#007acc' }}>View Details</Link>
                    </div>
                    <div style={{ margin: '10px', width: '300px', border: '1px solid #ccc', padding: '20px' }}>
                        <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2024/civic-type-r/non-VLP/Global-Nav--Inventory/MY24-Civic-Type-R-non-VLP-nav-2x.png" alt="Car 2" style={{ width: '100%' }} />
                        <h3>Honda Civic</h3>
                        <p>$30,000</p>
                        <Link to="/All-New-Civic" style={{ textDecoration: 'none', color: '#007acc' }}>View Details</Link>
                    </div>
                </div>
            </div>

            <div style={{ padding: '50px 20px', textAlign: 'center' }}>
                <h2>Customer Testimonials</h2>
                <p>"The best dealership experience I've ever had!" - John Doe</p>
                <p>"High quality cars and excellent service." - Jane Smith</p>
            </div>

            <div style={{ padding: '10px 20px', textAlign: 'center', marginBottom : '100px'}}>
                <h2 style={{ paddingBottom: '20px' }}>Find Us Here</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093727!2d144.9537353153152!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577da7c0a9d9b1a!2sVictoria!5e0!3m2!1sen!2sau!4v1614058477487!5m2!1sen!2sau"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps Location"
                ></iframe>
            </div>
        </Layout>
    );
}

export default Index;

