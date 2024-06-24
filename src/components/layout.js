import React from 'react';
import Navigation from "./navigation";

import '../styles/global.css'

function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation/>
            <div className="content">
                { children }
            </div>
            <footer>
                <p>footer</p>
            </footer>
        </div>
    );
}

export default Layout;