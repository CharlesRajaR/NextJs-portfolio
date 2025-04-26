import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className="px-30">
      <div className="my-10">
        <p className='text-xl text-center font-medium'>Introduction</p>
        <p className='text-3xl text-center font-medium'>About me</p>
      </div>
      <div className='flex gap-10 items-center'>
       <div className="w-[500px] h-[250px]">
        <Image src={assets.rcr} alt='rcr' className='w-full h-full object-cover rounded-lg'/>
       </div>

       <div className=" flex flex-col gap-10">
         <p>I am a full stack developer, I specialize in building responsive user friendly interfaces
          and robust, scalable backend systems. From designing intuitive user experiences to developing
          secure APIs and managing databases, I enjoy bringing ideas to life through clean efficient code
           I focus on creating secure, scalable and user-friendly solutions tailored to thier needs
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3">
         {
          infoList.map((item, i) => (
            <div key={i} className="flex flex-col gap-3 w-[200px] aspect-square border-slate-500
            border-[1px] rounded-lg px-3 py-4">
                <Image src={item.icon} alt='icon' className='w-5 h-5'/>
                <p className='text-xl font-bold text-black'>{item.title}</p>
                <p>{item.description}</p>
            </div>
          ))
         }
       </div>
       <div className="flex flex-col gap-3">
         <p>Tools I Use</p>
         
          <div className="flex gap-3">
            {
              toolsData.map((item, i) => (
                <div className="w-[40px] h-[40px] border-slate-500 flex items-center
                justify-center border-[1px] rounded-md">
                  <Image src={item} alt='tool' className='w-[80%] h-[80%]'/>
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
