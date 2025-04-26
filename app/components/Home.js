import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div id='home' className='flex gap-10 flex-col items-center'>
           <div className="">
            <Image src={assets.rcr} alt='rcr' className='w-80 shadow-pink-800 shadow-sm
            hover:shadow-md h-60 rounded-full transition duration-300 -translate-y-3 items-center'/>
           </div>
           <div className="flex gap-3 items-center">
            <p className='text-xl font-semibold'>Hi! I'm Charles Raja R</p>
            <Image src={assets.hand_icon} alt='hand' className='w-6 h-6'/>
           </div>
           <div className="">
            <p className='text-5xl'>full stack web developer based in India</p>
           </div>
           <div className="flex gap-5">
             <button className='bg-black text-white px-5 py-3 rounded-full  flex items-center gap-3 text-xl font-medium'
             >Contact me <Image src={assets.right_arrow_white} alt='arrow' className='w-5 h-5'/></button>
    
             <a className='bg-white border-slate-700 border-[0.5px] text-black px-5 py-3 rounded-full
               flex items-center gap-3 text-xl' href='/sample-resume.pdf' download={true}
             >Resume <Image src={assets.download_icon} alt='arrow' className='w-5 h-5'/>
             </a>
           </div>
        </div>
  )
}

export default Home
