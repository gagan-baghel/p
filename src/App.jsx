import { useState,useEffect,useRef } from 'react'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero'
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Boxes } from './components/ui/background-boxes';


function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += event.deltaY;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
   <div  ref={containerRef} className="flex h-screen overflow-y-hidden overflow-x-scroll relative no-scrollbar">
    <Navbar/>
    <Boxes />

    <Hero/>
    <About/>
    <Projects/>

    <Contact/>
   </div>
  )
}

export default App
