'use client'

import { ArrowRight, FileQuestion } from 'lucide-react'
import React from 'react'
import SentimentBox from '../SentimentBox/SentimentBox';

export default function Sentiment() {
    const containerRef = React.useRef(null);

    const handleScroll = (event) => {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        const thumbRatio = scrollWidth / clientWidth;
        const thumbPosition = (scrollLeft / scrollWidth) * 100;

        document.getElementById('thumb').style.left = `${thumbPosition}%`;
    };
    return (
        <div className='w-full p-4 md:p-6 rounded-lg bg-white flex flex-col'>
            <h1 className='text-2xl font-semibold pb-[10px]'>Sentiment</h1>
            <div className='w-full flex flex-col  pb-[15px]'>
                <div className='w-fit flex gap-2 items-center'>
                    <h1 className='text-lg font-semibold pb-[10px]'>Key Events</h1>
                </div>

                <div className='w-full overflow-auto'>
                    <div className='relative w-fit flex gap-4 overflow-x-scroll'>
                        <SentimentBox color={"#59D5E0"} />
                        <SentimentBox color={"#59eeE0"} />
                    </div>
                </div>
            </div>


            <div className='w-full flex flex-col'>
                <h1 className='text-lg font-semibold pb-[20px]'>Analyst Estimates</h1>
                <div className='w-full flex gap-[20px] items-start flex-wrap justify-center md:justify-normal'>
                    <div className='w-[120px] h-[120px] bg-green-200 rounded-full text-3xl flex justify-center items-center text-green-600'>
                        76%
                    </div>
                    <div className='max-w-full w-[500px] flex flex-col gap-4'>
                        <div className='flex gap-6 items-center'>
                            <h1 className='text-md font-semibold text-gray-600'> Buy</h1>
                            <div className='w-full flex gap-2 items-center'>
                                <div className='h-[10px] bg-green-600 w-[76%] rounded-md'></div>
                                <h1>76%</h1>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <h1 className='text-md font-semibold text-gray-600'>Hold</h1>
                            <div className='w-full flex gap-2 items-center'>
                                <div className='h-[10px] bg-gray-400 w-[8%] rounded-md'></div>
                                <h1>8%</h1>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <h1 className='text-md font-semibold text-gray-600'>Sell</h1>
                            <div className='w-full flex gap-2 items-center'>
                                <div className='h-[10px] bg-red-600 w-[16%] rounded-md'></div>
                                <h1>16%</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
