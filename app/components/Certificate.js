import { assets, course } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Certificate = () => {
  return (
    <div className='flex flex-col gap-3 md:gap-5 lg:gap-7'>
      <div className="mx-auto my-5 flex flex-col gap-1 md:gap-2">
         <motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.7}}
          className=' text-2xl md:text-6xl dark:text-white font-bold'>
          My Certificates</motion.p>
      </div>
      <div className='flex justify-center items-center'>
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3
       space-y-3">
        {
         course.map((item, i) => (
            <div 
             key={i} className='dark:text-white '>
              <motion.p
              initial={{rotateY:-90}}
            whileInView={{rotateY:0}} transition={{duration:1}} 
            className='text-center text-xl md:text-2xl font-semibold mt-2'>{item.name}</motion.p>
              <motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}}
              className='text-lg md:text-xl text-center fony-bold mb-2'>{item.provider}</motion.p>
              <motion.div initial={{rotateY:90}}
            whileInView={{rotateY:0}} transition={{duration:1}}
              ><Image className='' src={item.img} alt='image'/></motion.div>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Certificate
