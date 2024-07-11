import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, data }) => {
    const primary = data.colors.primary;
    const secondary = data.colors.secondary;
    const accent = data.colors.accent;

    console.log(primary, secondary, accent);

    return (
        <div className='min-h-screen flex flex-col'>
            <Header name={ data.name } icon={ data.icon } color={ primary }/>

            <main className="flex-grow">
                { children }
            </main>

            <Footer name={ data.name }/>
        </div>
    );
}

export default Layout;