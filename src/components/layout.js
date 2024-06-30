import React from 'react';
import Navigation from './navigation';
import Footer from './footer';
import '../styles/global.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navigation />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;