/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { ArrowRight, Phone } from 'lucide-react'
import React from 'react'

export default function About() {
    return (
        <div className='w-full p-6 flex flex-col bg-white rounded-lg gap-3'>
            <h1 className='text-2xl font-semibold pb-[10px]'>About Bitcoin</h1>

            <div className='w-full flex gap-2 flex-col'>
                <h1 className='text-lg font-semibold'>What is Bitcoin</h1>

                <h1>
                    Bitcoin is a decentralized digital currency that operates without a central authority. It enables peer-to-peer transactions through blockchain technology, providing transparency and security. Bitcoin's limited supply and decentralized nature contribute to its value as a digital store of wealth and medium of exchange.</h1>
            </div>

            <div className='w-full h-[1px] bg-gray-500'></div>

            <div className='w-full flex gap-2 flex-col'>
                <h1 className='text-lg font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis!</h1>

                <div className='flex flex-col gap-[25px]'>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex error dolores non, totam vel aliquid ea magnam exercitationem? Asperiores, ipsa! Soluta, impedit minus sapiente quia est labore expedita saepe vel sint velit modi obcaecati rerum corporis quisquam, dicta quam doloremque aperiam non! Impedit aliquid nemo veniam saepe maxime nesciunt.</h1>

                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex error dolores non, totam vel aliquid ea magnam exercitationem? Asperiores, ipsa! Soluta, impedit minus sapiente quia est labore expedita saepe vel sint velit modi obcaecati rerum corporis quisquam, dicta quam doloremque aperiam non! Impedit aliquid nemo veniam saepe maxime nesciunt.</h1>
                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ex error dolores non, totam vel aliquid ea magnam exercitationem? Asperiores, ipsa! Soluta, impedit minus sapiente quia est labore expedita saepe vel sint velit modi obcaecati rerum corporis quisquam, dicta quam doloremque aperiam non! Impedit aliquid nemo veniam saepe maxime nesciunt.</h1>
                </div>
            </div>

            <div className='w-full h-[1px] bg-gray-500'></div>

            <div className='w-full flex gap-3 flex-col'>
                <h1>Already Holding Bitcoin?</h1>
                <div className='w-full flex gap-4 justify-between'>
                    <div className='max-w-full flex flex-1 gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-400 to-cyan-400'>
                        <div className='w-[100px] h-[100px] rounded-md'>
                            <img
                                className='w-full h-full'
                                src="./images/image1.png"
                                alt="" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-xl font-semibold text-white'>Calculate  your Profits</h1>
                            <button className='text-md text-black text-center px-6 py-2 rounded-lg flex bg-white items-center gap-2'>Check Now  <ArrowRight /></button>
                        </div>
                    </div>
                    <div className='max-w-full flex flex-1 gap-4 p-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-500'>
                        <div className='w-[100px] h-[100px] rounded-md'>
                            <img
                                className='w-full h-full'
                                src="./images/image2.png"
                                alt="" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-xl font-semibold text-white'>Calculate  your Profits</h1>
                            <button className='text-md text-black text-center px-6 py-2 rounded-lg flex bg-white items-center gap-2'>Check Now  <ArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[1px] bg-gray-500'></div>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe accusantium nesciunt sunt cupiditate aliquid labore maxime ipsa dolores, voluptatum veritatis voluptates tenetur neque modi libero a consectetur suscipit magni porro obcaecati veniam doloribus corrupti! Quibusdam, dolorem, accusantium animi asperiores consectetur ipsa officia rem nesciunt deleniti, error blanditiis velit. Laboriosam, labore!
            </div>
        </div>
    )
}
