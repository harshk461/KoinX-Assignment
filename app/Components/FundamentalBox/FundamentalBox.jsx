'use client'

import React from 'react'

export default function FundamentalBox({ title, value }) {
    return (
        <div className='w-full h-[70px] py-3 border-b-2 border-b-gray-300 flex justify-between items-center'>
            <h1 className='text-[18px] font-semibold text-gray-400'>{title}</h1>
            <h1 className='text-md md:text-lg font-semibold text-gray-700'>{value}</h1>
        </div>
    )
}
