'use client'

import React, { useEffect, useState } from 'react';
import FundamentalBox from '../FundamentalBox/FundamentalBox';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Performance() {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const getData = async () => {
        try {
            setloading(true);
            await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
                .then(res => {
                    console.log(res.data);
                    setData(res.data);

                })
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
        <div className='w-full p-6 bg-white rounded-md'>
            <h1 className='text-2xl font-semibold pb-[20px]'>Performance</h1>

            <div className='w-full flex gap-4 items-center pb-[30px]'>
                <div className='flex flex-col items-start gap-2 break-keep'>
                    <h1 className='text-lg text-gray-600 break-keep'>Today&apos;s Low</h1>
                    <h1 className='text-xl text-gray-800 font-semibold'>$ 00,000</h1>
                </div>
                <div className='w-full stick h-[7px] rounded-md'>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-lg text-gray-600'>Today&apos;s High</h1>
                    <h1 className='text-xl text-gray-800 font-semibold'>$ 00,000</h1>
                </div>
            </div>

            <div className='w-full flex gap-4 items-center pb-[30px]'>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-lg text-gray-600 break-keep'>24H Low</h1>
                    <h1 className='text-xl text-gray-800 font-semibold'>$ 00,000</h1>
                </div>
                <div className='w-full stick h-[7px] rounded-md'>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <h1 className='text-lg text-gray-600'>24H High</h1>
                    <h1 className='text-xl text-gray-800 font-semibold'>$ 00,000</h1>
                </div>
            </div>

            <h1 className='text-xl font-semibold pb-[20px] text-gray-600'>Fundamentals</h1>

            <div className='w-full flex gap-[50px]'>
                <div className='flex-1 max-w-full flex flex-col gap-3'>
                    <FundamentalBox title={"Bitcoin Price"} value={"$" + data.current_price} />
                    <FundamentalBox title={"24h Low / 24h High"} value={"$" + data.low_24h + " / " + "$" + data.high_24h} />
                    <FundamentalBox title={"7D Low /  7D High"} value={"$" + data.low_24h + " / " + "$" + data.high_24h} />
                    <FundamentalBox title={"Trading Volume"} value={"$" + data.current_price} />
                    <FundamentalBox title={"Market Cap Rank"} value={"#" + data.market_cap_rank} />
                </div>

                <div className='flex-1 max-w-full flex flex-col gap-3'>
                    <FundamentalBox title={"Market Cap"} value={"$" + data.market_cap} />
                    <FundamentalBox title={"Market Cap Dominance"} value={"$" + data.market_cap} />
                    <FundamentalBox title={"Volume / Market Cap"} value={"$" + data.total_volume} />
                    <FundamentalBox title={"All-Time High"} value={"$" + data.ath} />
                    <FundamentalBox title={"All-Time Low"} value={"$" + data.atl} />
                </div>
            </div>
        </div>
    );
}
