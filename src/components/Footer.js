import React from 'react';

const Footer = ({ name }) => {
    return (
        <footer className='text-black dark:text-white bg-gray-400 dark:bg-gray-600 font-semibold text-center py-3'>
            <p>© { name }. All rights reserved.</p>
        </footer>
    );
}

export default Footer;