import React from "react";
import CustomCursor from "./components/CustomCursor";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import IntroAnimation from "./components/IntroAnimation";

export default function App(){
  const [introDone, setIntroDone] = React.useState(false);
  return(
    <>
{!introDone && <IntroAnimation onFinish ={()=> setIntroDone(true)} />}

    <div className="relative gradient text-white">
      <CustomCursor/>
      <NavBar/>
      <a href="#home" className="sr-only focus:not-sr-only fixed top-4 left-4 z-[60] bg-white text-black px-3 py-2 rounded">
        Skip to content
      </a>
      <main>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      </main>
      <Footer/>

    </div>
    </>

  )
}
