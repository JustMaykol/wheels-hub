import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: "rgba(0, 0, 0, 0.25)",
            textAlign: 'center',
            padding: '20px',
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%'
        }}>
            <div>
                <a href="/about">AboutUs</a> | <a href="/contact">Contact</a>
            </div>
            <div>
                © {new Date().getFullYear()} WheelsHub Honda. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;