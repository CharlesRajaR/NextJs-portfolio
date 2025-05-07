import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({darkTheme}) => {
  return (
    <div id='about' className="px-20 md:px-30">
      <div className="flex flex-col gap-3 md:gap-5 my-10">
        <p className='text-sm md:text-3xl dark:text-white text-center font-medium'>Introduction</p>
        <p className='text-2xl  md:text-9xl dark:text-white text-center font-medium'>About me</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
       <div className="md:col-span-1">
        <Image src={assets.rcr} alt='rcr' 
        className='w-full h-full object-cover rounded-lg'/>
       </div>

       <div className="md:col-span-2 flex flex-col dark:text-amber-100 gap-5 md:gap-10">
         <p className='text-xl md:text-2xl text-center'>I am a full stack developer, I specialize in building responsive user friendly interfaces
          and robust, scalable backend systems. From designing intuitive user experiences to developing
          secure APIs and managing databases, I enjoy bringing ideas to life through clean efficient code
           I focus on creating secure, scalable and user-friendly solutions tailored to thier needs
         </p>

         <div className="grid grid-cols-1 gap-2 md:gap-3 dark:text-amber-100 md:grid-cols-3">
         {
          infoList.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 w-full md:w-[200px] aspect-square
             border-slate-500
            border-[1px] rounded-lg px-3 py-4 hover:-translate-y-2 transition duration-300
           dark:hover:shadow-amber-50 dark:hover:shadow-lg cursor-pointer">
                <Image src={darkTheme? item.iconDark: item.icon} alt='icon' className='w-5  h-5'/>
                <p className='text-xl dark:text-amber-50 font-bold text-black'>{item.title}</p>
                <p>{item.description}</p>
            </div>
          ))
         }
       </div>
       <div className="flex flex-col gap-3">
         <p>Tools I Use</p>
         
          <div className="flex flex-wrap justify-start gap-2 md:gap-3">
            {
              toolsData.map((item, i) => (
                <div key={i}>
                <div className="w-1/5 h-3/5  md:w-[40px] md:h-[40px] border-slate-500 flex items-center
                justify-center border-[1px] rounded-md">
                  <Image src={item} alt='tool' className='w-[80%] h-[80%]'/>
                </div>
                
                </div>
              ))

              
            }
          </div>
         
       </div>
       </div>

       
    </div>
    </div>
   
  )
}

export default About
