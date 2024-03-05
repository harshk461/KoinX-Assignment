import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import CurrencyHeader from './Components/CurrencyHeader/CurrencyHeader'
import GetStarted from './Components/GetStarted/GetStarted'

export default function Page() {
  return (
    <div className='w-full h-full bg-gray-300 flex flex-col'>
      <Navbar />
      <div className='w-full px-6 py-4'>
        <CurrencyHeader currency={"Bitcon"} />
        <GetStarted />
      </div>
    </div>
  )
}
