"use client"
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React from 'react'

const Contact = () => {
  
    async function handleSubmit(event) {

          event.preventDefault();
          const formData = new FormData(event.target);
          // const router = useRouter();

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
            // router.push('/')
        }, 3000);
      }

  
      return (
        <div className="flex mt-5 justify-center relative items-center min-h-screen max-w-screen">
          <p className='absolute top-2 text-sm font-bold left-2'><Link href='/'>Go Back</Link></p>
           <div className="w-[80%] md:w-[50%] h-full shadow-slate-600 shadow-md rounded-md flex flex-col items-center gap-3">
            <p className='text-2xl md:text-3xl lg:text-5xl mt-3 font-bold'>Get in touch with me</p>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
               <div className="flex flex-col gap-3 w-[100%]">
                <label htmlFor="" className='text-sm md:text-xl font-medium'>Name:</label>
                <input type="text" className='text-sm md:text-2xl text-slate-500 font-medium px-5 py-2 w-[100%] outline-blue-400
                border-slate-500 border-2 rounded-sm' placeholder='Please Enter Your Name'/>
               </div>
               <div className="flex flex-col gap-3 w-[100%]">
                <label htmlFor="" className='text-sm md:text-xl font-medium'>Email:</label>
                <input type="text" className='text-sm md:text-2xl text-slate-500 font-medium px-5 py-2 w-[100%] outline-blue-400
                border-slate-500 border-2 rounded-sm' placeholder='Please Enter Your Email'/>
               </div>
               <div className="flex flex-col gap-3 w-[100%]">
                <label htmlFor="" className='text-sm md:text-xl font-medium'>Mobile:</label>
                <input type="text" className='text-sm md:text-2xl text-slate-500 font-medium px-5 py-2 w-[100%] outline-blue-400
                border-slate-500 border-2 rounded-sm' placeholder='Please Enter Your Mobile Number'/>
               </div>
               <div className="flex flex-col gap-3 w-[100%]">
                <label htmlFor="" className='text-sm md:text-xl font-medium'>Message:</label>
                <textarea type="text" className='text-sm md:text-2xl text-slate-500 font-medium px-5 py-2 w-[100%] outline-blue-400
                border-slate-500 border-2 rounded-sm' placeholder='Please Enter Your Message'/>
               </div>
               <div className="flex flex-col mb-3 gap-3 w-[100%]">
                <button className='bg-blue-600 text-xl md:text-2xl text-white font-medium w-full 
                py-2 rounded-md border-none hover:text-gray-300 transition duration-300
                hover:bg-blue-500 cursor-pointer' type='submit'>SUBMIT</button>
                <p id='success-message' className='text-3xl hidden font-medium' >Message Sent Successfully....</p>
               </div>
            </form>
           </div>
        </div>
  )
}

export default Contact
