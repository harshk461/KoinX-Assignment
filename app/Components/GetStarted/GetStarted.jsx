/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function GetStarted() {
    return (
        <div className='max-w-full w-[400px] flex flex-col justify-center items-center bg-[#0052FE] py-[30px] rounded-lg gap-4'>
            <h1 className='text-xl text-white text-center font-semibold '>Get Started KoinX <br /> for FREE</h1>
            <h1 className='text-white text-sm text-center'>With our range of features that you can equip for <br /> free, KoinX allows you to be more educated and <br /> aware of your tex reports</h1>
            <img
                src="./images/getStarted.png"
                alt="image" />
            <button className='flex bg-white px-7 py-3 rounded-md font-semibold items-center gap-2'>Get Started for FREE <ArrowRight /></button>
        </div>
    )
}
