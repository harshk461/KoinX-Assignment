'use client'

import React, { useEffect, useState } from 'react';
import FundamentalBox from '../FundamentalBox/FundamentalBox';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Performance() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);

    const getRandomValue = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    const getData = async () => {
        try {
            setloading(true);
            const response = await axios.get("http://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=2")
            const d = response.data;
            console.log(data)
            setData(d);
        }
        catch (e) {
            console.log(e);
            // toast.error(e.response.data.message);
        }
        finally {
            setloading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='w-full p-3 md:p-6 bg-white rounded-md'>
            <h1 className='text-2xl font-semibold pb-[20px]'>Performance</h1>

            <div className='w-full md:flex gap-4 items-center pb-[30px] justify-between hidden'>
                <div className='w-[10%] flex flex-col items-start gap-2 break-keep'>
                    <h1 className='text-md text-gray-600 break-keep'>Today&apos;s Low</h1>
                    <h1 className='text-md text-gray-800 font-semibold'>{data.atl ? data.atl.toLocaleString("en-US") : "$67,837"}</h1>
                </div>
                <div className='w-[80%] stick h-[7px] rounded-md'>
                </div>
                <div className='w-[10%] flex flex-col items-start gap-2'>
                    <h1 className='text-md text-gray-600'>Today&apos;s High</h1>
                    <h1 className='text-md text-gray-800 font-semibold'>{data.atl ? data.atl.toLocaleString("en-US") : "$67,837"}</h1>
                </div>
            </div>

            <div className='w-full md:flex gap-4 items-center pb-[30px] justify-between hidden'>
                <div className='w-[10%] flex flex-col items-start gap-2 break-keep'>
                    <h1 className='text-lg text-gray-600 break-keep'>24H Low</h1>
                    <h1 className='text-xl text-gray-800 font-semibold'>{data.atl ? data.atl.toLocaleString("en-US") : "$67,837"}</h1>
                </div>
                <div className='w-[80%] stick h-[7px] rounded-md'>
                </div>
                <div className='w-[10%] flex flex-col items-start gap-2'>
                    <h1 className='text-lg text-gray-600'>24H High</h1>
                    <h1 className='text-xl text-gray-800 font-semibold'>{data.atl ? data.atl.toLocaleString("en-US") : "$67,837"}</h1>
                </div>
            </div>

            <h1 className='text-xl font-semibold pb-[20px] text-gray-600'>Fundamentals</h1>

            <div className='w-full flex gap-[10px] md:gap-[50px] flex-col md:flex-row'>
                <div className='flex-1 max-w-full flex flex-col gap-3'>
                    <FundamentalBox
                        title={"Bitcoin Price"}
                        value={data.current_price ? "$" + data.current_price : "$16,938.09"} />
                    <FundamentalBox
                        title={"24h Low / 24h High"}
                        value={data.low_24h ? "$" + data.low_24h + " / " + "$" + data.high_24h : "$16,837 / $17,837"} />
                    <FundamentalBox
                        title={"7D Low /  7D High"}
                        value={data.low_24h ? "$" + data.low_24h + " / " + "$" + data.high_24h : "$16,837 / $17,837"} />
                    <FundamentalBox
                        title={"Trading Volume"}
                        value={data.current_price ? "$" + data.current_price : "$23,249,874,763"} />
                    <FundamentalBox
                        title={"Market Cap Rank"}
                        value={data.market_cap_rank ? "#" + data.market_cap_rank : "#1"} />
                </div>

                <div className='flex-1 max-w-full flex flex-col gap-3'>
                    <FundamentalBox
                        title={"Market Cap"}
                        value={data.market_cap ? `$ ${data.market_cap}` : `$ 788,232,838`}
                    />
                    <FundamentalBox
                        title={"Market Cap Dominance"}
                        value={data.market_cap_dominance ? `$ ${data.market_cap_dominance}` : `$ 38.983%`}
                    />
                    <FundamentalBox
                        title={"Volume / Market Cap"}
                        value={data.total_volume && data.market_cap ? `$ ${(data.total_volume / data.market_cap).toFixed(2)}` : `-`}
                    />

                    <div className='w-full h-[70px] border-b-2 border-b-gray-300 flex justify-between items-center'>
                        <h1 className='text-[18px] font-semibold text-gray-400'>All Time High</h1>
                        <div className='flex flex-col gap-1 items-end'>
                            <div className='flex gap-2 items-center'>
                                <h1 className='text-lg font-semibold'>{data.ath ? data.ath.toLocaleString("en-US") : "$69,909.32"}</h1>
                                <h1 className={`text-lg ${data.ath < 0 ? 'text-red-500' : 'text-green-500'}`}>76.7%</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <h1 className='text-sm font-semibold'>Nov 10 2021</h1>
                                <h1 className='text-sm'>(about 1 year)</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[70px] border-b-2 border-b-gray-300 flex justify-between items-center'>
                        <h1 className='text-[18px] font-semibold text-gray-400'>All Time Low</h1>
                        <div className='flex flex-col gap-1 items-end'>
                            <div className='flex gap-2 items-center'>
                                <h1 className='text-lg font-semibold'>{data.atl ? data.atl.toLocaleString("en-US") : "$69,909.32"}</h1>
                                <h1 className={`text-lg ${data.atl < 0 ? 'text-red-500' : 'text-green-500'}`}>76.7%</h1>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <h1 className='text-sm font-semibold'>Nov 10 2021</h1>
                                <h1 className='text-sm'>(about 1 year)</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
