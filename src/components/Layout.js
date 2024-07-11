import React from 'react';
import { Icon } from '@iconify/react';
import { Navbar, Spinner, DarkThemeToggle, NavbarBrand, NavbarLink, NavbarToggle, NavbarCollapse } from 'flowbite-react';
import useTenantData from '../hooks/useData';

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
            <div className='flex justify-center items-center h-screen'>
                <Spinner size='xl' aria-label='Loading...'/>
            </div>
        );
    }

    const primary = data.colors.primary;
    const secondary = data.colors.secondary;
    const accent = data.colors.accent;

    console.log(primary, secondary, accent);

    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar fluid={ true } rounded={ false } className='bg-gray-400 dark:bg-gray-600'>
                    <NavbarBrand className='items-center' href='/'>
                        <Icon icon={ data.icon } className='text-3xl mr-2' style={ { color: primary } }/>
                        <div className='self-center whitespace-nowrap text-xl font-semibold' style={ { color: primary } }>
                            { data.name }
                        </div>
                    </NavbarBrand>

                    <div className='flex items-center md:order-2 space-x-4'>
                        <a href='/login'>
                            <Icon icon='fa-solid:user' className='text-3xl' style={ { color: primary } }/>
                        </a>

                        <DarkThemeToggle/>
                        <NavbarToggle style={ { color: primary } }/>
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