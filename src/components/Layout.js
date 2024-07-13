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

const Layout = ({ children, data }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar fluid={ true } rounded={ false } className='bg-gray-400 dark:bg-gray-600'>
                    <NavbarBrand className='items-center' href='/'>
                        <Icon icon={ data.icon } className='text-3xl mr-2' style={ { color: data.color } }/>
                        <div className='self-center whitespace-nowrap text-xl font-semibold' style={ { color: data.color } }>
                            { data.name }
                        </div>
                    </NavbarBrand>

                    <div className='flex items-center md:order-2 space-x-4'>
                        <a href='/login'>
                            <Icon icon='fa-solid:user' className='text-3xl' style={ { color: data.color } }/>
                        </a>

                        <DarkThemeToggle/>
                        <NavbarToggle style={ { color: data.color } }/>
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

            <main className="flex-grow">
                { children }
            </main>

            <footer className='text-black dark:text-white bg-gray-400 dark:bg-gray-600 font-semibold text-center py-3'>
                <p>© { data.name }. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;