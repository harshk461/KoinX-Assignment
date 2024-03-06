'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import CoinBox from '../CoinBox/CoinBox';
import axios from 'axios';

export default function OtherCoins() {
    const SampleNextArrow = ({ onClick }) => {
        return (
            <button
                type="button"
                onClick={onClick}
                className='p-3 rounded-full bg-gray-200 shadow-lg'
                style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)' }}>
                <ArrowRight size={24} color="gray" />
            </button>
        );
    };

    const SamplePrevArrow = ({ onClick }) => {
        return (
            <button
                type="button"
                onClick={onClick}
                className='p-3 rounded-full bg-gray-200 shadow-lg z-10'
                style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)' }}>
                <ArrowLeft size={24} color="gray" />
            </button>
        );
    };


    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
            const d = response.data.coins;
            // d.sort((a, b) => b.market_cap - a.market_cap);
            const top7 = d.slice(0, 10);
            setData(top7);
        }
        catch (e) {
            console.log(e);
        }
        finally { setLoading(false); }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='w-full flex flex-wrap gap-3 p-6 bg-white shadow-md'>

            <div className='w-full flex flex-col'>
                <h1 className='text-lg font-semibold'>You Also Like</h1>
                <div className='w-full py-[20px] gap-2'>
                    <Slider {...settings}>
                        {data && data.map((item, i) => (
                            <CoinBox
                                key={i}
                                name={item.item.name}
                                image={item.item.small}
                                graph={item.item.data.sparkline}
                                value={item.item.data.price_change_percentage_24h.usd} />
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='w-full flex flex-col'>
                <h1 className='text-lg font-semibold'>Trending</h1>
                <div className='w-full py-[20px] gap-2'>
                    <Slider {...settings}>
                        {data && data.map((item, i) => (
                            <CoinBox
                                key={i}
                                name={item.item.name}
                                image={item.item.small}
                                graph={item.item.data.sparkline}
                                value={item.item.data.price_change_percentage_24h.usd} />
                        ))}
                    </Slider>
                </div>
            </div>

        </div>
    )
}
