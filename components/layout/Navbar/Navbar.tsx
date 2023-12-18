"use client"

import React, { useEffect, useState } from 'react'
import ActionButtons from './Button'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`sticky top-0 mx-auto bg-[#E5E4E2] ${hasScrolled ? "shadow-sm" : ""}`}>
            <div className='flex items-center justify-between max-w-5xl xl:max-w-7xl p-2 mx-auto bg-[#E5E4E2] md:px-10'>
                <Logo />
                <div className='flex space-x-4 xl:space-x-8 '>
                    <Menu />
                    <ActionButtons />
                </div>
            </div>
        </div>
    )
}

export default Navbar
