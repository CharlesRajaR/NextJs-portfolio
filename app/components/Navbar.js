'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = ({darkTheme, setDarkTheme}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <nav id='home' className={`flex bg-white dark:bg-black dark:md:bg-slate-900 z-50 
    justify-between items-center px-20 py-5 w-full fixed`} >
        <p className='text-lgs font-mono md:text-3xl font-bold cursor-pointer dark:text-slate-200
        '> <a href="#home">CHARLES RAJA R</a></p>
         <ul className={`hidden bg-no-repeat dark:hover:shadow-lg dark:shadow-amber-100
          dark:text-white bg-cover md:flex border-[0.1px] px-10 py-2 rounded-full text-2xl
          border-slate-400 gap-7 items-center transition duration-300`}>
            <li><a href="#home">Home</a></li>
            <li ><a href="#about">About me</a></li>
            {/* <li ><a href="#services">Services</a></li> */}
            <li ><a href="#projects">Projects</a></li>
            <li ><Link href="/Contact">Contact me</Link></li>
            
        </ul>

        <div className="flex items-center text-xl md:text-2xl dark:text-white gap-5">
            <Image onClick={()=>setDarkTheme(!darkTheme)}
            src={darkTheme ? assets.sun_icon : assets.moon_icon}
             className={`cursor-pointer ${darkTheme ? "w-5 h-5":"w-5 h-5"}`} alt='moon'/>
            <Link className='md:flex gap-2 border-slate-200 border-2 rounded-full
            items-center px-10 py-1 hidden transition duration-300
             hover:text-slate-700 hover:bg-pink-50'
             href="/Contact">Contact
              <Image src={darkTheme ? assets.arrow_icon_dark :assets.arrow_icon}
                alt='image' className="w-3" /></Link>

             <Image src={darkTheme ? assets.menu_white : assets.menu_black} onClick={()=>setIsOpen(true)}
              className='w-5 h-5 cursor-pointer md:hidden block' alt='menu'/>
        
        </div>
        
    </nav>
    {
        isOpen ?  <div className="h-screen w-[70%] md:w-[30%]
         dark:text-amber-50 fixed transition duration-300
        top-0 right-0 z-50 bg-pink-100 dark:bg-slate-700">
        <Image onClick={() => setIsOpen(false)}
         src={darkTheme ? assets.close_white :assets.close_black} className='top-1 cursor-pointer
          right-1 w-3 h-3 absolute' alt='close'/>
       <ul onClick={() => setIsOpen(false)} className='md:hidden pt-10 flex 
      flex-col gap-5 items-center'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About me</a></li>
            {/* <li><a href="#services">Services</a></li> */}
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact me</a></li>
        </ul>
    </div>
    :""

    }
   
    
    </>
  )
}

export default Navbar
