'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav id='home' className='flex justify-between items-center px-20 py-5 w-full fixed '>
        <p className='text-2xl font-bold cursor-pointer
        '>Charles Raja R</p>
         <ul className={`hidden bg-no-repeat bg-cover md:flex border-[0.1px] px-10 py-2 rounded-full
          border-slate-400 gap-5 items-center`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="conact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-5">
            <Image src={assets.moon_icon} className='w-5 h-5' alt='moon'/>
            <a className='md:flex gap-2 border-slate-200 border-2 rounded-full
            items-center px-10 py-1 hidden 
             hover:text-slate-700 hover:bg-pink-50 transition duration-150'
             href="#conact">Contact <Image className src={assets.arrow_icon}  alt='image'
             className='w-3' /></a>

             <Image src={assets.menu_black} onClick={()=>setIsOpen(true)}
              className='w-5 h-5 cursor-pointer md:hidden block' alt='menu'/>
        
        </div>
        
    </nav>
    {
        isOpen ?  <div className="h-screen w-[30%] fixed transition duration-300
        top-0 right-0 z-50 bg-pink-100 ">
        <Image onClick={() => setIsOpen(false)}
         src={assets.close_black} className='top-1 cursor-pointer
          right-1 w-3 h-3 absolute' alt='close'/>
       <ul onClick={() => setIsOpen(false)} className='md:hidden pt-10 flex 
      flex-col gap-5 items-center'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="conact">Contact me</a></li>
        </ul>
    </div>
    :""

    }
   
    
    </>
  )
}

export default Navbar
