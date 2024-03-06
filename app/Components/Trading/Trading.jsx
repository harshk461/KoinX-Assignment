'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoTriangle } from 'react-icons/io5';
import TradingGraph from '../TradingGraph/TradingGraph';

export default function Trading() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true")
            const d = response.data;
            setData(d.bitcoin);
        }
        catch (e) {
            console.log(e);
            // toast.error("Server Error");
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='w-full bg-white rounded-lg p-6 flex flex-col'>

            <div className='flex gap-4'>
                <div className='flex gap-2 items-center py-4 flex-wrap'>
                    <img
                        className='w-[40px] h-[40px] rounded-full'
                        src={data.image ? data.image : "./images/bitcoin.png"}
                        alt="coin" />
                    <div className='flex items-start gap-2 pr-[30px]'>
                        <h1 className='text-lg font-semibold'>{data.name ? data.name : "Bitcoin"}</h1>
                        <h1 className='text-sm'>BTC</h1>
                    </div>

                    <div
                        className='px-3 py-2 rounded-lg bg-gray-500 text-white'>Rank #1</div>
                </div>
            </div>
            <div className='flex flex-col py-2 gap-2'>
                <div className='flex gap-3 items-start'>
                    <h1 className='text-3xl font-semibold'>$ {data.usd ? data.usd.toLocaleString('en-US') : "67,980"}</h1>

                    <div className='flex items-center gap-2'>
                        <div className={`px-4 py-[2px] rounded-lg bg-green-200 flex gap-1
                    text-[14px] items-center ${data.usd_24h_change < 0 ? 'bg-red-200' : 'bg-green-200'}`}>
                            {data.usd_24h_change < 0 ? <IoTriangle color="red" /> : <IoTriangle color='green' />}
                            <h1 className={`${data.usd_24h_change < 0 ? 'text-red-600' : 'text-green-600'}`}>{data.usd_24h_change ? data.usd_24h_change.toFixed(2) : "2.87%"}</h1>
                        </div>
                        <h1 className='text-[14px]'>(24H)</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-medium'>Rs. {data.inr ? data.inr.toLocaleString("en-IN") : "39,98,103"}</h1>
                </div>
            </div>
            <div className='w-full h-[3px] bg-gray-400 mb-[20px]'></div>
            <div className='w-full h-[500px]'>
                <TradingGraph />
            </div>
        </div>
    )
}
