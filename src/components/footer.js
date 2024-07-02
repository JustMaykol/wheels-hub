import React from 'react';

const Footer = () => {
    const data = JSON.parse(localStorage.getItem("data"));

    return (
        <footer>
            <div>
                <a href="/about">About</a> | <a href="/contact">Contact</a>
            </div>
            <div>
                { }

                { undefined && `© 2024 ${ data.name } WheelsHub.` }

                © 2024 { data.name } WheelsHub.
            </div>
        </footer>
    );
};

export default Footer;