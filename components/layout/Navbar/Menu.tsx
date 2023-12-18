import React from 'react'
import Link from "next/link";

const Menu = () => {
    return (
        <div className="hidden md:block">
            <div className="flex flex-row items-start w-full gap-4 space-x-4 text-lg text-black xl:space-x-8 ">
                <Link href="/pricing" className="">
                    Pricing
                </Link>
                <Link href="/product" className="">
                    Product
                </Link>

                <Link href="/" className="">
                    About
                </Link>
            </div>
        </div>
    )
}

export default Menu
