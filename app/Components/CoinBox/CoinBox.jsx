/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { IoTriangle } from 'react-icons/io5';

export default function CoinBox({ image, name, value, graph }) {
    return (
        <div className='max-w-full m-auto w-[350px] h-[170px] p-3 rounded-md border-2 border-gray-300 flex flex-col items-center gap-3 overflow-ellipsis'>
            <div className='flex gap-2 items-center'>
                <img className='w-8 h-8 rounded-full' src={image} alt="coin" />
                <h1 className='text-md font-semibold'>{name}</h1>
                <div
                    className={`px-2 py-1 text-sm rounded-md ${value < 0 ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'} flex items-center gap-1`}>
                    {value < 0 ? <IoTriangle color='red' style={{ transform: "rotate(180deg)" }} /> : <IoTriangle color='green' />}
                    {value.toFixed(2)}
                </div>
            </div>
            <img className='w-full h-[100px] rounded-b-md' src={graph} alt="graph" />
        </div>
    );
}