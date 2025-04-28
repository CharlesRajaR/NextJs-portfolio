"use client"
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import { useEffect, useState } from 'react';

export default function App() {
  
  const[darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
     if(localStorage.theme === "dark"){
        setDarkTheme(true)
     }
     else{
      setDarkTheme(false)
     }
  }, []);

  useEffect(() => {
    if(darkTheme){
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark"
    } 
    else{
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light"
    }
  }, [darkTheme]);
  
  return (
    <>
     <div className="flex flex-col gap-20 md:gap-40 dark:bg-slate-900 w-full">
        <div className="">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        </div>
        <div className="">
          <Home darkTheme={darkTheme}/>
        </div>
        <div className="">
          <About darkTheme={darkTheme}/>
        </div>
        <div className="">
          <Project darkTheme={darkTheme}/>
        </div>
        <div className="">
          <Contact darkTheme={darkTheme}/>
        </div>
        <div className="">
          <Footer darkTheme={darkTheme}/>
        </div>
     </div>
    </>
  );
}
