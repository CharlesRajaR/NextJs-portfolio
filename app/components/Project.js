import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Project = ({darkTheme}) => {
  return (
    <div id='projects' className='px-30 flex flex-col gap-10 items-center'>
      <div className="flex flex-col gap-5 items-center">
         <p className='dark:text-amber-50 text-2xl font-medium'>My Portfolio</p>
         <p className='dark:text-amber-50 text-5xl font-medium'>My Latest Work</p>
         <p className='dark:text-amber-50 text-xl  text-center'>Welcome to my web development portfolio! Explore the collections of projects
            showcasing my expertise in full stack web development
         </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:grid-cols-4">
        {
            workData.map((item, i) => (
                <div key={i} className="w-full transition duration-300 h-full 
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
                </div>
            ))
        }
      </div>
      <div className="">
        <button onClick={() => {
               if (typeof window !== "undefined") {
               window.open("https://github.com/CharlesRajaR", "_blank");
               }
             }}
         className='flex dark:text-amber-100 cursor-pointer 
         items-center gap-3 px-5 py-2 border-slate-500 border-[1px] rounded-full
        '>show more <Image src={darkTheme ? assets.right_arrow_bold_dark :assets.right_arrow} alt='icon' className='w-5 h-3'/></button>
      </div>
    </div>
  )
}

export default Project
