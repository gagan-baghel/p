import { AllProjects } from "./ui/AllProjects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black px-6 py-20 font-space sm:px-10 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:px-0 lg:py-0"
    >
      <h2 className="pointer-events-none absolute bottom-6 left-[8%] z-0 hidden pb-4 font-archivo text-9xl font-black tracking-tighter text-zinc-800/35 select-none md:block">
        PROJECTS
      </h2>

      <div className="z-10 mx-auto mb-10 w-full max-w-6xl lg:mb-12 lg:px-14">
        <p className="mb-2 text-xs font-semibold tracking-[0.28em] text-zinc-400 uppercase">
          Selected Work
        </p>
        <h3 className="font-archivo text-4xl font-black tracking-tight text-white sm:text-5xl">
          Signature projects.
        </h3>
      </div>

      <div className="z-10 flex h-full w-full items-center lg:px-2">
        <AllProjects />
      </div>
    </section>
  );
}
