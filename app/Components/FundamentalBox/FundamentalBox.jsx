import React from 'react'

export default function FundamentalBox({ title, value }) {
    return (
        <div className='w-full py-3 border-b-2 border-b-gray-300 flex justify-between items-center'>
            <h1 className='text-[18px] font-semibold text-gray-400'>{title}</h1>
            <h1 className='text-lg font-semibold text-gray-700'>{value}</h1>
        </div>
    )
}
