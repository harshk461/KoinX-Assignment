import React from 'react'

export default function CurrencyHeader({ currency }) {
    return (
        <div className='w-full flex gap-2 text-[14px]'>
            <h1>Currency {'>> '}</h1>
            <h1 className='font-semibold'>{currency}</h1>
        </div>
    )
}
