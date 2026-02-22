"use client";

import { useRef, useState } from "react";
import { GiDoubleFaceMask } from "react-icons/gi";
import { useScroll, useTransform, motion } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects";
import { Boxes } from "./components/ui/background-boxes";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Use Framer Motion's useScroll to get the vertical scroll position of the window
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map the vertical scroll (0 to 1) to horizontal movement
  // The negative value translates the div to the left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]); // 4 sections = 400vw, we shift by 300vw (-75%)

  const scrollToSection = (id) => {
    // With this layout, "scrolling to a section" means changing the window's vertical scroll
    // to match the corresponding horizontal offset.
    // For a cleaner setup in this refactor, we just jump to the rough percentage.
    const sectionIndex = sections.findIndex((s) => s.id === id);
    if (sectionIndex !== -1) {
      // Calculation based on height. Window height represents 1 viewport. 
      // Total scrollable height is `400vh`. 
      const targetScroll = (sectionIndex / (sections.length - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
      setIsNavOpen(false);
    }
  };

  return (
    <>
      {/* We make the container tall enough (400vh) to allow native vertical scrolling */}
      <div ref={containerRef} className="relative h-[400vh] bg-black">

        {/* Fixed Navigation Button */}
        <button
          type="button"
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="fixed left-8 top-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-600 bg-black/40 text-3xl text-white backdrop-blur"
          aria-label="Toggle navigation"
        >
          <GiDoubleFaceMask />
        </button>

        <Navbar
          sections={sections}
          isOpen={isNavOpen}
          onClose={() => setIsNavOpen(false)}
          onSelect={scrollToSection}
        />

        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
          {/* Framer motion container mapping Y to X */}
          <motion.div
            style={{ x }}
            className="flex h-screen w-[400vw]"
          >
            <div className="relative w-[100vw] h-full">
              <Boxes />
              <Hero />
            </div>

            <div className="w-[100vw] h-full">
              <About />
            </div>

            <div className="w-[100vw] h-full">
              <Projects />
            </div>

            <div className="w-[100vw] h-full">
              <Contact />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
