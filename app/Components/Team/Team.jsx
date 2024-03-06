import React from 'react'
import TeamMember from '../TeamMember/TeamMember'

export default function Team() {
    return (
        <div className='w-full p-6 bg-white rounded-md'>
            <h1 className='text-2xl font-semibold pb-[10px]'>Team</h1>
            <h1 className='pb-[10px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate esse alias nesciunt accusantium dignissimos, architecto ut. Nostrum adipisci maxime totam.</h1>
            <div className='w-full flex flex-col gap-4'>
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        </div>
    )
}
