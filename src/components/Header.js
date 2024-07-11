import React from 'react';
import { Icon } from "@iconify/react";

import { DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const pages = [
    {
        path: "/",
        title: "HOME"
    },
    {
        path: "/vehicles",
        title: "VEHICLES"
    },
    {
        path: "/about",
        title: "ABOUT"
    },
    {
        path: "/contact",
        title: "CONTACT"
    }
];

const Header = ({ name, icon, color }) => {
    return (
        <header>
            <Navbar fluid={ true } rounded={ false } className='bg-gray-400 dark:bg-gray-600'>
                <NavbarBrand className='items-center' href='/'>
                    <Icon icon={ icon } className='text-3xl mr-2' style={ { color: color } }/>
                    <div className='self-center whitespace-nowrap text-xl font-semibold' style={ { color: color } }>
                        { name }
                    </div>
                </NavbarBrand>

                <div className='flex items-center md:order-2 space-x-4'>
                    <a href='/login'>
                        <Icon icon='fa-solid:user' className='text-3xl' style={ { color: color } }/>
                    </a>

                    <DarkThemeToggle/>
                    <NavbarToggle style={ { color: color } }/>
                </div>

                <NavbarCollapse>
                    { pages.map(({ path, title }) => {
                        return (
                            <NavbarLink className='text-black dark:text-white font-semibold' href={ path }>
                                { title }
                            </NavbarLink>
                        );
                    }) }
                </NavbarCollapse>
            </Navbar>
        </header>
    );
}

export default Header;