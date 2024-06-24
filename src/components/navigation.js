import React from 'react';
import { Link } from 'gatsby';

import '../styles/global.css'

function Navigation() {
    return (
        <nav>
            <h1>title</h1>
            <div className="navigation">
                <Link to="/">home</Link>
                <Link to="/vehicles">vehicles</Link>
            </div>
        </nav>
    );
}

export default Navigation;