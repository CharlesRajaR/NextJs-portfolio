import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex py-5 gap-5 flex-col items-center'>
      <p className='text-2xl font-bold'>Charles Raja R</p>
      <p className='flex items-center gap-3'><Image src={assets.mail_icon} alt='mail' className='w-5 h-4'/>{" "} charlesraja822@gmail.com</p>
       <div className='w-[80%] h-[1px] border-t-[1px] border-slate-700 px-20'></div>
       <div className="flex justify-between w-[80%] items-center">
    
            <p>2025 Charles Raja R. All rights reserved</p>
            <div className="flex gap-5">
              <p>Terms of services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
        
       </div>
    </div>
  )
}

export default Footer
