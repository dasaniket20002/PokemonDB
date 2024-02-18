import React from 'react'
import { Outlet, Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();

    return (
        <>
            <nav className='grid p-4 mx-2 grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1'>
                <section className='flex items-end gap-2 justify-center md:justify-start'>
                    <h1 className='text-2xl'>PokeDex</h1>
                    <h2 className='text-2xl font-thin'>Database</h2>
                </section>
                <ul className='navigation_list_elements flex items-end gap-10 justify-center'>
                    <li>
                        <Link to='/'>Home</Link>
                        <span className={location.pathname === '/' ? 'h-[0.125rem] w-full block bg-white' : 'h-0 w-full block bg-white'}></span>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                        <span className={location.pathname === '/about' ? 'h-[0.125rem] w-full block bg-white' : 'h-0 w-full block bg-white'}></span>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Nav