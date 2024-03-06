'use client'

import React, { useState } from 'react'

export default function OptionHeader() {
    const [option, setOption] = useState(0);
    return (
        <div className='w-full border-b-[1px] border-b-gray-500'>
            <div className='w-full overflow-x-auto flex'>
                <div
                    onClick={() => setOption(0)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 0 && 'border-b-blue-500'}`}>
                    <h1>Overview</h1>
                </div>
                <div
                    onClick={() => setOption(1)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 1 && 'border-b-blue-500'}`}>
                    <h1>Fundamentals</h1>
                </div>
                <div
                    onClick={() => setOption(2)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 2 && 'border-b-blue-500'}`}>
                    <h1>News Insights</h1>
                </div>
                <div
                    onClick={() => setOption(3)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 3 && 'border-b-blue-500'}`}>
                    <h1>Sentiments</h1>
                </div>
                <div
                    onClick={() => setOption(4)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 4 && 'border-b-blue-500'}`}>
                    <h1>Team</h1>
                </div>
                <div
                    onClick={() => setOption(5)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 5 && 'border-b-blue-500'}`}>
                    <h1>Technicals</h1>
                </div>
                <div
                    onClick={() => setOption(6)}
                    className={`px-8 py-2 cursor-pointer border-b-4 font-semibold text-gray-500 ${option === 6 && 'border-b-blue-500'}`}>
                    <h1>Tokenomics</h1>
                </div>
            </div>
        </div>
    )
}
