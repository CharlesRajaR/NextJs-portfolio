import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Home = ({darkTheme}) => {
  return (
    <div id='home' className='mt-10 md:mt-0 flex gap-10 flex-col items-center'>
           <div className="">
            <Image src={assets.rcr} alt='rcr' className='w-40 h-25 md:w-80 shadow-pink-800
             shadow-sm
            hover:shadow-md md:h-60 rounded-full transition duration-300 hover:-translate-y-3
             dark:hover:shadow-amber-50 
            dark:shadow-lg items-center '/>
           </div>
           <div className="flex gap-3 items-center">
            <p className='text-sm md:text-2xl  dark:text-amber-100 md:font-semibold'>Hi! I'm Charles Raja R</p>
            <Image src={assets.hand_icon} alt='hand' className='w-3 h-3 md:w-6 md:h-6'/>
           </div>
           <div className="">
            <p className='text-2xl md:text-7xl px-10 text-center dark:text-amber-100'>full stack web developer based in India</p>
           </div>
           <div className="flex flex-col items-center md:flex-row gap-5">
             <button className='bg-black text-white px-5 py-3 rounded-full  flex items-center 
             gap-3 text-sm md:text-xl font-medium'
             ><a href="#contact">Contact me</a><Image src={assets.right_arrow_white} alt='arrow' className='w-3 h-3 md:w-5 md:h-5'/></button>
    
             <a className='bg-white border-slate-700 border-[0.5px] text-black px-5 py-3 
             rounded-full
               flex items-center gap-3 text-sm md:text-xl' href='/sample-resume.pdf' download={true}
             >Resume <Image src={assets.download_icon} alt='arrow' className='w-3 h-3 md:w-5 md:h-5'/>
             </a>
           </div>
        </div>
  )
}

export default Home
