/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function TeamMember() {
    return (
        <div className='w-full flex gap-4 items-center px-6 py-3 bg-blue-200 rounded-md justify-between'>
            <div className='w-full flex flex-col items-center'>
                <img
                    className='rounded-md pb-[10px] w-[130px] h-[150px]'
                    src="./images/user.png"
                    alt="user" />

                <h1 className='text-lg font-semibold'>John Smith</h1>
                <h1 className='text-gray-700'>Designation Here</h1>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea magnam nisi tempora beatae, dolorum nostrum aut? Ea eaque quia porro voluptates corporis veritatis harum ducimus quas a, nihil excepturi repellendus, at maiores laboriosam dolorem? Assumenda maxime harum repellat, at consequatur fugiat tenetur itaque laborum, voluptates blanditiis mollitia, atque dolore. Necessitatibus doloribus nemo asperiores, libero ea magni deserunt! Nam, quam illo.
            </div>
        </div>
    )
}
