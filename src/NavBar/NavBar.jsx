import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleToggle = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className='bg-cyan-500  text-black  font-mono font-bold flex justify-end items-center p-4'>
                <div className='md:flex  gap-8 md:justify-center hidden'>
                    <Link to="/" className='py-2'>
                        Home
                    </Link>
                    <Link to="/FindEvents" className='py-2'>
                        Find Events
                    </Link>
                </div>
                <div className='md:hidden cursor-pointer' onClick={handleToggle}>
                    {nav ? (
                        <GiCrossMark size={30} className='text-white' />
                    ) : (
                        <GiHamburgerMenu size={30} />
                    )}
                </div>
            </div>
            {nav && (
                <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
            )}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-slate-300 z-10  transition-transform' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-700'}>
                <GiCrossMark
                    onClick={handleToggle}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer md:hidden'
                />

                <nav>
                    <ul className='flex flex-col font-mono font-bold p-4 text-gray-800'>
                        <Link to="/" onClick={handleToggle}>
                            <li className='py-2'>Home</li>
                        </Link>
                        <Link to="/FindEvents" onClick={handleToggle}>
                            <li className='py-2'>Find Events</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar