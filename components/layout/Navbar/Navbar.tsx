"use client"

import React from 'react'
import ActionButtons from './Button'
import Logo from './Logo'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='mx-auto bg-[#E5E4E2]'>
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
