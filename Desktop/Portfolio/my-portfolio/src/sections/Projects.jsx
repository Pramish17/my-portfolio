import { useEffect, useMemo, useState } from "react"

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import { motion, AnimatePresence } from "framer-motion"



const useIsMobile= (query = "(max-width: 639px)") =>{
  const [isMobile, setIsMobile] =useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
useEffect(()=>{
  if(typeof window === "undefined") return;
  const mql = window.matchMedia(query);
  const handler = (e) => setIsMobile(e.matches);

  mql.addEventListener("change", handler);
  setIsMobile(mql.matches);
  return ()=> mql.removeEventListener("change",handler);
}, [query])
return isMobile;
}



export default function Projects(){
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = useMemo(
    () => [
      {
        title: "gazetteer",
        link: "https://pramishthapa.com/gazetteer/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1, // use mobile or desktop image
      },
       {
        title: "Kurakani-Meet",
        link: "https://kurakani-meet.netlify.app/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo2 : img2, // use mobile or desktop image
      }
    ],
    [isMobile] // re-run only when `isMobile` changes
  );

  const activeProject = projects[activeIndex];
  const nextProject = () =>
    setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (index) => setActiveIndex(index);

  return(
    <section id = "projects"
    className="relative min-h-screen text-white flex items-center justify-center py-16 sm:py-20"
    style={{
      backgroundColor : activeProject.bgColor,
      transition: "background-color 400ms ease"
    }}
    >
 <div className="w-full max-w-7xl px-4 sm:px-6 flex flex-col items-center justify-center">
  <h2 className={`text-3xl font-semibold z-10 text-center ${
    isMobile ? "mt-4" :"mt-8"
  }`}>
    My Work
  </h2>
<div className={`relative w-full flex items-center justify-center ${
  isMobile ? "mt-2":"mt-4"
}`}>
  <div className="relative w-full" style={{ maxWidth: "1200px" }}>
    <AnimatePresence mode="wait">
      <motion.div
      key={activeProject.title}
      initial={{opacity:0, x:40}}
      animate={{opacity:1, x:0}}
      exit={{opacity:0, x:-40}}
      transition={{duration:0.35, ease:"easeOut"}}
      drag="x"
      dragConstraints={{left: 0, right: 0}}
      onDragEnd={(_, info) => {
        if (info.offset.x < -80) nextProject();
        if (info.offset.x > 80) prevProject();
      }}
      >
        <motion.h3
        initial={{opacity:0, y:-20}}
        animate={{opacity:1, y:0}}
        transition={{duration: 0.3, ease:"easeOut"}}
        className={`block text-center text-[clamp(2rem,6vw,5rem)] text-white/95 italic font-semibold ${
          isMobile ? "mb-3" : "mb-5"
        }`}
        >
          {activeProject.title}
        </motion.h3>

<div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
  md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
    isMobile? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
  }
  h-[56vh] sm:h-[66vh]
  `}
  style={{zIndex:10, transition:"box-shadow 250ms ease"}}
  >
  <img src={activeProject.image} alt={activeProject.title}
  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
  style={{
    position: "relative",
    zIndex: 10,
    filter: "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
    transition: "filter 200ms ease"
  }}
  loading="lazy"
  />
  <div className="pointer-events-none absolute inset-0"
  style={{zIndex:11,
    background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
  }}
  >

  </div>

</div>
      </motion.div>
    </AnimatePresence>
  </div>
</div>

<div className={`w-full max-w-7xl px-4 sm:px-6 flex items-center justify-center gap-3 ${isMobile ? "mt-0" : "mt-2"}`}>
  {projects.map((project, idx) => (
    <button
    key={project.title}
    type="button"
    onClick={() => goToProject(idx)}
    className={`h-2.5 rounded-full transition-all ${
      activeIndex === idx ? "w-8 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
    }`}
    aria-label={`Go to ${project.title}`}
    aria-current={activeIndex === idx ? "true" : "false"}
    />
  ))}
</div>

<div className="mt-6 flex items-center gap-3">
  <button
  type="button"
  onClick={prevProject}
  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"
  aria-label="Previous project"
  >
    Prev
  </button>
  <a href={activeProject?.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
  aria-label={`View ${activeProject?.title}`}  
  >View Project</a>
  <button
  type="button"
  onClick={nextProject}
  className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-all"
  aria-label="Next project"
  >
    Next
  </button>
</div>
</div>

    </section>
  )
}
