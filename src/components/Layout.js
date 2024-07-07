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

    console.log(data);

    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar fluid={ true } rounded={ false } className={ `bg-[${ data.colors.secondary }] dark:bg-gray-800` }>
                    <NavbarBrand className='items-center' href='/'>
                        <Icon icon={ data.icon } className='text-3xl mr-2' style={ { color: data.colors.primary } }/>
                        <div className='self-center whitespace-nowrap text-xl font-semibold' style={ { color: data.colors.primary } }>
                            { data.name }
                        </div>
                    </NavbarBrand>

                    <div className='flex items-center md:order-2 space-x-4'>
                        <a href='/login'>
                            <Icon icon='fa-solid:user' className='text-3xl' style={ { color: data.colors.accent } }/>
                        </a>

                        <DarkThemeToggle/>
                        <NavbarToggle style={ { color: data.colors.primary } }/>
                    </div>

                    <NavbarCollapse>
                        { pages.map(({ path, title }) => {
                            return (
                                <NavbarLink className='text-gray-800 dark:text-gray-200' href={ path }>
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

            <footer className={ `bg-[${ data.colors.accent }] text-white text-center py-3` }>
                <p>© { data.name }. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
