'use client'

/* eslint-disable @next/next/no-img-element */
import { IoTriangle } from 'react-icons/io5'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';

export default function TrendingCoins() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const getTrendingCoins = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
            const trendingCoins = response.data.coins;

            trendingCoins.sort((a, b) => b.market_cap - a.market_cap);
            const top3Coins = trendingCoins.slice(0, 3);
            // console.log(top3Coins[0].item.data);
            setData(top3Coins);
        } catch (error) {
            console.error("Error fetching trending coins:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getTrendingCoins();
    }, []);


    return (
        <div className='max-w-full w-full flex flex-col py-6 px-4 bg-white rounded-lg'>
            <h1 className='text-2xl mb-2 font-bold'>Trending Coins (24h)</h1>

            {data.map((item, i) => (
                <div
                    key={i}
                    className='w-full justify-between items-center flex pt-3 '>
                    <div className='flex gap-2'>
                        <img
                            className='w-[25px] h-[25px]'
                            src={item.item.small} alt="eth" />
                        <h1 className='text-md font-semibold'>{item.item.name}</h1>
                    </div>
                    <div className={`px-3 py-1 rounded-lg flex w-fit text-[15px] items-center gap-2 text-green-700 
                    ${item.item.data.price_change_percentage_24h.usd < 0 ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'}`}>
                        {item.item.data.price_change_percentage_24h.usd < 0 ? <IoTriangle style={{ transform: 'rotate(180deg)' }} /> : <IoTriangle />}
                        {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </div>
                </div>
            ))}

            {loading && <Loader />}
        </div>
    )
}
