import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const Home = ({darkTheme}) => {
  return (
    <div
     id='home' className='mt-10 md:mt-0 flex gap-10 flex-col items-center'>
           <motion.div className="">
            <Image initial={{ scale:0 }}
              whileInView={{ scale:1}} transition={{ duration: 1 }}
             src={assets.rcr} alt='rcr' className='w-40 h-25 md:w-80 shadow-pink-800
             shadow-sm
            hover:shadow-md md:h-60 rounded-full transition duration-300 hover:-translate-y-3
             dark:hover:shadow-amber-50 
            dark:shadow-lg items-center '/>
           </motion.div>
           <div className="flex gap-3 items-center">
            <motion.p initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.5}}
             className='text-sm md:text-2xl  dark:text-amber-100 md:font-semibold'>
              Hi! I'm Charles Raja R</motion.p>
            <Image src={assets.hand_icon} alt='hand' className='w-3 h-3 md:w-6 md:h-6'/>
           </div>
           <div className="">
            <motion.p 
            initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}} className='text-2xl font-mono md:text-7xl px-10 text-center dark:text-amber-100'>
              FULL STACK WEBSITE DEVELOPER AND IOT DEVELOPER BASED IN INDIA</motion.p>
           </div>
           <div className="flex flex-col items-center md:flex-row gap-5">
             <button className='bg-black text-white px-5 py-3 rounded-full 
              flex items-center gap-3 text-sm md:text-xl font-medium hover:px-6
               hover:py-4'
             ><Link href="/Contact">Contact me</Link>
             <Image src={assets.right_arrow_white} alt='arrow' className='w-3 h-3 md:w-5 md:h-5'/></button>
    
             <a className='bg-white border-slate-700 border-[0.5px]
              text-black px-5 py-3 
             rounded-full hover:px-6 hover:py-4
               flex items-center gap-3 text-sm md:text-xl' href='/Charles_Raja_Resume.pdf' download={true}
             >Resume <Image src={assets.download_icon} alt='arrow' className='w-3 h-3 md:w-5 md:h-5'/>
             </a>
           </div>
        </div>
  )
}

export default Home
