import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({darkTheme}) => {
  return (
    <div className='flex py-5 dark:text-amber-50 gap-5 flex-col items-center'>
      <p className='text-xl md:text-2xl font-bold'>Charles Raja R</p>
      <p className='text-sm md:text-xl flex items-center gap-3'><Image src={assets.mail_icon} alt='mail' className='w-5 h-4'/>{" "} charlesraja822@gmail.com</p>

       <div className='w-[80%] h-[1px] border-t-[1px] dark:border-amber-50
        border-slate-700 px-20'></div>
       <div className="flex text-xs md:text-xl flex-col md:flex-row justify-between w-[80%]
        items-center">
    
            <p className=''>© 2025 Charles Raja R. All rights reserved</p>
            <div className="flex gap-5">
              <p>Terms of services</p>
              <p>Privacy Policy</p>
                    <a href="https://www.linkedin.com/in/r-charles-raja-2930b8225/" target='_blank'>
                    <p>Linkedin</p>
                    </a>
            </div>
        
       </div>
    </div>
  )
}

export default Footer
