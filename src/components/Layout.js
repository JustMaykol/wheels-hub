import React from 'react';

import { Helmet } from "react-helmet";
import { Icon } from "@iconify/react";
import { DarkThemeToggle, Dropdown, DropdownHeader, DropdownItem, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

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
    }
];

const Layout = ({ children, data, user }) => {
    return (
        <div className='min-h-screen flex flex-col bg-white dark:bg-gray-900 bg-gradient-to-r from-blue-100 to-blue-300 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900'>
            <Helmet>
                <title>{ data.name }</title>
            </Helmet>

            <header>
                <Navbar fluid={ true } rounded={ false } className='bg-gray-400 dark:bg-gray-600'>
                    <NavbarBrand className='items-center' href='/'>
                        <Icon icon={ data.icon } className='text-3xl mr-2' style={ { color: data.color } }/>
                        <div className='self-center whitespace-nowrap text-xl font-semibold' style={ { color: data.color } }>
                            { data.name }
                        </div>
                    </NavbarBrand>

                    <div className='flex items-center md:order-2 space-x-4'>
                        {
                            user ? (
                                <Dropdown placement='left-start' style={ { all: 'unset' } } arrowIcon={ false } label={ <Icon rounded icon='fa-solid:user' className='text-3xl' style={ { color: data.color } }/> }>
                                    <DropdownHeader>
                                        <span className="block text-sm">{ user.name }</span>
                                        <span className="block truncate text-sm font-medium">{ user.user_id }</span>
                                        <span className="block text-sm">${ user.wallet }</span>
                                    </DropdownHeader>
                                    <DropdownItem onClick={ () => {
                                        localStorage.removeItem(`${ data.id }_user`);
                                        window.location.reload();
                                    } } className='justify-center font-bold'>Log Out</DropdownItem>
                                </Dropdown>
                            ) : (
                                <a onClick={ () => {
                                    localStorage.setItem('redirect', window.location.pathname);
                                } } href='/login'>
                                    <Icon icon='fa-solid:user' className='text-3xl' style={ { color: data.color } }/>
                                </a>
                            )
                        }

                        <DarkThemeToggle/>
                        <NavbarToggle style={ { color: data.color } }/>
                    </div>

                    <NavbarCollapse>
                        { pages.map(({ path, title }) => {
                            return (
                                <NavbarLink className='text-black dark:text-white font-semibold md:hover:text-black dark:hover:text-white' href={ path }>
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