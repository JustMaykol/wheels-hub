import React from 'react';
import { Link } from 'gatsby';

import honda_logo from '../assets/images/honda_logo.png';

import '../styles/global.css'

function Navigation() {
    return (
        <nav>
            <div className="layout-a">
                <img src={ honda_logo } className="layout-logo" alt="logo"/>
                <h1 style={ { pointerEvents: 'none' } }>WheelsHub</h1>
            </div>
            <div className="navigation-box">
                <div className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/vehicles">Vehicles</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;