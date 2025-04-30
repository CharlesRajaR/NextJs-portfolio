"use client"
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Contact = ({darkTheme}) => {
    async function handleSubmit(event) {
          event.preventDefault();
          const formData = new FormData(event.target);

          formData.append("access_key", "5f8ab159-e3b6-4a78-ae66-63b38e822427");

          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);

          const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
          });
          const result = await response.json();
          if (result.success) {
              console.log(result);
          }
          event.target.reset();

        const successTag = document.getElementById("success-message");
        successTag.style.display = "block";

        setTimeout(() => {
            successTag.style.display = "none";
        }, 3000);
      }

  
      return (
    <div id='contact' className='flex flex-col px-20 md:px-30 items-center gap-20'>
        <div className="flex flex-col text-black gap-5 items-center">
           <p className='text-sm md:text-2xl dark:text-amber-50 font-medium'>Connect with me</p>
           <p className='text-2xl md:text-6xl dark:text-amber-50 font-medium'>Get in touch</p>
           <p className='text-xl md:text-3xl dark:text-amber-50 text-center font-medium'>love to hear from you If you have any questions, comments, or feedback
            Please use the form below
           </p>
        </div>
        <div className="flex items-center justify-center w-[80%] h-auto
        rounded-lg">
        <form onSubmit={handleSubmit} className='dark:text-amber-50 text-slate-700 flex flex-col items-center w-full gap-5'>
          <div className="flex flex-col w-full md:flex-row md:justify-between gap-2 mg:gap-5">
          <input className='appearance-none border-[1px] border-slate-300 rounded-lg 
           md:text-xl md:w-1/2 text-xs md:text-sm
          px-10 py-3 focus:outline-none focus:shadow-amber-50 focus:shadow-2xl' type="text"
           name="name" placeholder='Enter your name' required/>

          <input required className='appearance-none border-[1px] focus:outline-none
           border-slate-300 rounded-lg text-xs md:text-sm md:text-xl md:w-1/2
          px-10 py-3  focus:shadow-amber-50 focus:shadow-2xl' type="email" name="email" placeholder='Enter your email'/>

          </div>
         
          <textarea required className='appearance-none focus:outline-none  
          border-[1px] h-[200px] border-slate-300 rounded-lg w-full text-sm md:text-xl
          px-10 py-3  focus:shadow-amber-50 focus:shadow-2xl' name="message" placeholder='Enter your message'></textarea>

          <button className='text-center flex items-center gap-3 bg-black
           text-white font-xs md:font-2xl font-medium  rounded-full cursor-pointer
           hover:bg-slate-700 hover:font-semibold transition duration-300
          px-5 py-3' type="submit">  Submit the form <Image src={assets.right_arrow} alt='icon'
          className='w-3 h-3 md:w-5 md:h-3'/> </button>
        </form>
        <div id="success-message">

        </div>
        </div>
    </div>
  )
}

export default Contact
