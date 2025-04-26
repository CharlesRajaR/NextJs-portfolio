import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Project from "./components/Project.js";

export default function App() {
  return (
    <>
     <div className="flex flex-col gap-40 w-full">
        <div className="">
          <Navbar/>
        </div>
        <div className="">
          <Home/>
        </div>
        <div className="">
          <About/>
        </div>
        <div className="">
          <Project/>
        </div>
     </div>
    </>
  );
}
