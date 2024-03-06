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
import Trading from './Components/Trading/Trading'
import OtherCoins from './Components/OtherCoins/OtherCoins'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Page() {
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <div className='w-full pt-[10px'>
        <CurrencyHeader currency={"Bitcon"} />

        <div className='w-full h-full flex gap-3 items-start justify-between md:flex-row flex-col px-[10px] md:px-[150px] pb-[20px]'>
          <div className='relative w-full md:w-[70%] flex flex-col gap-4'>
            <Trading />
            <Performance />
            <Sentiment />
            <About />
            {/* <Tokenomics /> */}
            <Team />
          </div>

          <div className='w-full flex flex-col gap-4 md:w-[30%]'>
            <GetStarted />
            <TrendingCoins />
          </div>
        </div>
        <OtherCoins />
      </div>
    </div>
  )
}
