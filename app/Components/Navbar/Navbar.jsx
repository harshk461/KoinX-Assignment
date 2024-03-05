import React from 'react'

export default function Navbar() {
    return (
        <div className='w-full px-[30px] py-4 bg-white flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>KoinX</h1>

            <div className='flex gap-6 items-center text-lg font-semibold'>
                <h1>Crypto Taxes</h1>
                <h1>Free Tools</h1>
                <h1>Resource Center</h1>

                <button className='px-6 py-2 rounded-md bg-blue-600 text-white font-semibold'>
                    Get Started
                </button>
            </div>
        </div>
    )
}
