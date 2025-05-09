import React from 'react'
import { skills, toolsData } from '@/assets/assets'
import { Image } from 'next/image'
import { motion } from 'framer-motion'
export const Skills = () => {
  return (
    <div>
    <div className='w-[100%] flex justify-center items-center'>
      <div className='flex flex-col gap-3'>
        <div>
            <p className='text-2xl md:text-5xl font-medium md:font-semibold text-center'>SKILLS</p>
          <p className='text-xl md:text-3xl font-medium md:font-semibold text-center'
          >A <span className='text-blue-700'>Passionate</span> Developer Who Loves To Code</p>
        </div>

        <div className='w-[80%] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7'>
            {
            //  skills.map((item, i) => (
            //     <div key={i}>
            //         <Image src={item} alt='img'/>
            //     </div>
             //))
             toolsData.map((item, i) => (
                <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:1}}
                 key={i}>
                <div className="border-slate-500 flex items-center
                justify-center border-[1px] rounded-md px-1 py-1">
                  <Image src={item} alt='tool' className='w-[80%] h-[80%]'/>
                </div>
                
                </motion.div>
              ))
            }
        </div>
      </div>
    </div>
    </div>
  )
}
