import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import CurrencyHeader from './Components/CurrencyHeader/CurrencyHeader'
import GetStarted from './Components/GetStarted/GetStarted'
import TrendingCoins from './Components/TrendingCoins/TrendingCoins'
import About from './Components/About/About'
import Sentiment from './Components/Sentiment/Sentiment'
import Tokenomics from './Components/Tokenomics/Tokenomics'
import Team from './Components/Team/Team'
import Performance from './Components/Performance/Performance'

export default function Page() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <div className='w-full px-[10px] md:px-[150px] py-4'>
        <CurrencyHeader currency={"Bitcon"} />

        <div className='w-full h-full flex gap-3 items-start justify-between md:flex-row flex-col'>
          <div className='w-full md:w-[60%] flex flex-col gap-4'>
            <Performance />
            <Sentiment />
            <About />
            <Tokenomics />
            <Team />
          </div>

          <div className='flex flex-col gap-4 w-[30%]'>
            <GetStarted />
            <TrendingCoins />
          </div>
        </div>
      </div>
    </div>
  )
}
