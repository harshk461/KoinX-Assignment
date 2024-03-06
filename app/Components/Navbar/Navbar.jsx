'use client'

import { Menu } from 'lucide-react'
import React, { useState } from 'react'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className='w-full px-[30px] py-4 bg-white flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>KoinX</h1>

            <div className='md:flex gap-6 items-center text-lg font-semibold hidden'>
                <h1>Crypto Taxes</h1>
                <h1>Free Tools</h1>
                <h1>Resource Center</h1>

                <button className='px-6 py-2 rounded-md bg-blue-600 text-white font-semibold'>
                    Get Started
                </button>
            </div>
            <div className='block md:hidden'>
                <Menu
                    onClick={toggleMenu} />
                {menuOpen && (
                    <div className="absolute right-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        <h1 className='px-6 py-2 border-b-2 border-b-gray-500'>Crypto Taxes</h1>
                        <h1 className='px-6 py-2 border-b-2 border-b-gray-500'>Free Tools</h1>
                        <h1 className='px-6 py-2 border-b-2 border-b-gray-500'>Resource Center</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
