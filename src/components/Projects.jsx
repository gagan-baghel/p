import { AllProjects } from "./ui/AllProjects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen min-w-full w-full items-center justify-center overflow-hidden bg-black font-space"
    >
      <h2 className="absolute z-0 bottom-[10%] left-[5%] md:bottom-[15%] md:left-[10%] pb-4 text-7xl md:text-9xl font-black text-zinc-800/40 font-archivo tracking-tighter pointer-events-none select-none">PROJECTS</h2>
      <div className="z-10 w-full h-full flex items-center">
        <AllProjects />
      </div>
    </section>
  );
}
