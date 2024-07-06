import React, { useState, useEffect } from 'react';

import { Icon } from "@iconify/react";

import { Navbar, Spinner, DarkThemeToggle, NavbarBrand, NavbarLink, NavbarToggle, NavbarCollapse } from 'flowbite-react';

import useTenantData from "../hooks/useData";

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

const Layout = ({ children }) => {
    const { data, loading } = useTenantData();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner size="xl" aria-label="Loading..."/>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar fluid={ true } rounded={ false } className='bg-white dark:bg-black'>
                    <NavbarBrand className='items-center' href="/">
                        <Icon icon={ `${ data.icon }` } className={ `text-3xl mr-2` } style={ { color: `${ data.color }` } }/>
                        <div className={ `self-center whitespace-nowrap text-xl font-semibold dark:text-white` } style={ { color: `${ data.color }` } }>
                            { data.name }
                        </div>
                    </NavbarBrand>

                    <div className="flex items-center md:order-2 space-x-4">
                        <a href="/login">
                            <Icon icon="fa-solid:user" className="text-3xl text-dark dark:text-white" style={ { color: `${ data.color }` } }/>
                        </a>

                        <DarkThemeToggle/>
                        <NavbarToggle style={ { color: `${ data.color }` } }/>
                    </div>

                    <NavbarCollapse>
                        { pages.map(({ path, title }) => {
                            return (
                                <NavbarLink className='text-dark dark:text-light' href={ path }>
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

            <footer className="bg-dark dark:bg-black text-white text-center py-4">
                <p>© { data.name }. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
