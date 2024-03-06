import { Newspaper } from 'lucide-react'
import React from 'react'

export default function SentimentBox({ color }) {
    return (
        <div
            className="max-w-full rounded-lg p-4 flex gap-4 items-start"
            style={{ width: '600px !important', backgroundColor: color }}>
            <div className='p-3 rounded-full bg-blue-100'>
                <Newspaper />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-md font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ea?</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quaerat consectetur necessitatibus nostrum adipisci ipsam voluptatum molestias sed cumque id ex officiis non reiciendis, ad sequi commodi. Sapiente, iusto autem alias accusantium delectus molestias aut quod odit molestiae, repellat laboriosam?</h1>
            </div>
        </div>
    )
}
