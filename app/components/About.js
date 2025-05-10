import { motion } from "framer-motion";
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({darkTheme}) => {
  return (
    <motion.div initial={{y:60, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{type:"spring", stiffness:100, damping:10}} id='about'
     className="px-20 md:px-30">
      <div className="flex flex-col gap-3 md:gap-5 my-10">
        <motion.p initial={{ opacity: 0, x: 100 }} // Starts off-screen to the right
  whileInView={{ opacity: 1, x: 0 }} // Moves to its normal position when visible
  transition={{ duration: 0.5, ease: "easeOut" }} 
         className='text-sm md:text-3xl dark:text-white text-center font-medium'>
          Introduction</motion.p>
        <motion.p initial={{ opacity: 0, x: -100 }} // Starts off-screen to the right
  whileInView={{ opacity: 1, x: 0 }} // Moves to its normal position when visible
  transition={{ duration: 0.5, ease: "easeOut" }} 
         className='text-2xl  md:text-9xl dark:text-white text-center font-medium'>About me
         </motion.p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
       <motion.div initial={{ rotateX: 90 }} 
   whileInView={{ rotateX: 0 }} 
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="md:col-span-1">
        <Image src={assets.rcr} alt='rcr' 
        className='w-full h-full object-cover rounded-lg'/>
       </motion.div>

       <div className="md:col-span-2 flex flex-col
        dark:text-amber-100 gap-5 md:gap-10">
         <motion.p initial={{ opacity: 0, y: 50 }} // The element starts off-screen (below) and invisible
  whileInView={{ opacity: 1, y: 0 }} // It fades in and moves to its original position
  transition={{ type: "spring", stiffness: 100, damping: 10 }} className='text-xl md:text-2xl text-center'>I am a full stack developer, I specialize in building responsive user friendly interfaces
          and robust, scalable backend systems. From designing intuitive user experiences to developing
          secure APIs and managing databases, I enjoy bringing ideas to life through clean efficient code
           I focus on creating secure, scalable and user-friendly solutions tailored to thier needs
         </motion.p>

         <div className="grid grid-cols-1 gap-2 md:gap-3 dark:text-amber-100 
         md:grid-cols-3">
         {
          infoList.map((item, i) => (
            <motion.div initial={{opacity:0, x:-100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.2, ease:"easeOut"}}
            key={i} className="flex flex-col gap-3 w-full
             md:w-[200px] aspect-square
             border-slate-500
            border-[1px] rounded-lg px-3 py-4 hover:-translate-y-2 transition
             duration-300
           dark:hover:shadow-amber-50 dark:hover:shadow-lg cursor-pointer">
                <Image src={darkTheme? item.iconDark: item.icon} alt='icon' className='w-5  h-5'/>
                <p className='text-xl dark:text-amber-50 font-bold text-black'>{item.title}</p>
                <p>{item.description}</p>
            </motion.div>
          ))
         }
       </div>
       <div className="flex flex-col gap-3">
         <p className='text-3xl font-semibold
          text-center md:text-2xl md:font-medium md:font-left'>Tools I Use</p>
         
          <div className="grid w-full grid-cols-2 space-x-5 md:space-x-3 space-y-2
          md:grid-cols-7">
            {
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
    </motion.div>
   
  )
}

export default About
