import { assets, workData, toolsData, skills } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
const Project = ({darkTheme}) => {
  return (
    <div className='flex flex-col gap-10 md:gap-20'>  

      <div id='projects'
       className='px-20 md:px-30 flex flex-col gap-5 md:gap-10 items-center'>
      <div className="flex flex-col gap-5 items-center">
         <motion.p initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.5}}
         className='dark:text-amber-50 text-xl md:text-2xl font-medium'>
          My Portfolio</motion.p>
         <motion.p initial={{x:100}} whileInView={{x:0}} transition={{duration:0.5}}
         className='dark:text-amber-50 text-2xl md:text-5xl font-medium'>My Latest Work</motion.p>
         <motion.p initial={{scale:0.1}} whileInView={{scale:1}} transition={{duration:0.5}}
         className='dark:text-amber-50 text-sm md:text-3xl  text-center'>Welcome to my web development portfolio! Explore the collections of projects
            showcasing my expertise in full stack web development
         </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4">
        {
            workData.map((item, i) => (
                <motion.div initial={{y:100 }} whileInView={{y:0}} transition={{duration:0.2}}
                 key={i} className="w-full transition duration-300 h-full 
                hover:shadow-amber-300 hover:shadow-lg dark:hover:shadow-orange-50
                 relative">
                    <Image src={item.bgImage} alt='image' width={200} height={200} className='rounded-lg'/>
                     <div className="absolute flex justify-between items-center group-hover:top-[50%]
                      h-[30%] w-[80%] left-[10%] top-[60%] bg-white rounded-md">
                        <div className="flex flex-col gap-1 px-2 py-2">
                            <p className='text-xs font-semibold'>{item.title}</p>
                            <p className='text-xs'>{item.description}</p>
                        </div>
                        <div className="px-2 cursor-pointer">
                            <a href={item.path} target='_blank'>
                               <Image src={assets.send_icon} alt='icon' className='w-5 h-5'/>
                            </a>
                        </div>
                     </div>
                </motion.div>
            ))
        }
      </div>
      <div className="">
        <button onClick={() => {
               if (typeof window !== "undefined") {
               window.open("https://github.com/CharlesRajaR", "_blank");
               }
             }}
         className='flex dark:text-amber-100 cursor-pointer text-sm dark:hover:shadow-amber-50 dark:hover:shadow-sm md:text-xl
         items-center gap-3 px-5 py-2 border-slate-500 border-[1px] rounded-full transition duration-300
        '>show more <Image src={darkTheme ? assets.right_arrow_bold_dark :assets.right_arrow} alt='icon' className='w-5 h-3'/></button>
      </div>
      </div>


      <div className='w-[100%] flex justify-center items-center'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-col gap-3'>
          <p className='dark:text-white text-2xl md:text-5xl font-medium md:font-semibold text-center'>SKILLS</p>
          <p className='dark:text-white text-xl md:text-3xl font-medium md:font-semibold text-center'
          >A <span className=' text-blue-700'>Passionate</span> Developer Who Loves To Code</p>
        </div>
        
        <div className='w-[90%] grid grid-cols-2 space-x-5 space-y-3 md:grid-cols-4 lg:grid-cols-7'>
            {
            
             skills.map((item, i) => (
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

export default Project
