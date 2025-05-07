import { assets, course } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Certificate = () => {
  return (
    <div className='flex flex-col gap-3 md:gap-5 lg:gap-7'>
      <div className="mx-auto my-5 flex flex-col gap-1 md:gap-2">
         <p className=' text-2xl md:text-6xl dark:text-white font-bold'>My Certificates</p>
      </div>
      <div className='flex justify-center items-center'>
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3
       space-y-3">
        {
         course.map((item, i) => (
            <div className='dark:text-white '>
              <p className='text-center text-xl md:text-2xl font-semibold mt-2'>{item.name}</p>
              <p className='text-lg md:text-xl text-center fony-bold mb-2'>{item.provider}</p>
              <Image className='' src={item.img} alt='image'/>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Certificate
