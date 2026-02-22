import { AllProjects } from "./ui/AllProjects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen min-w-full w-full items-center justify-center overflow-y-hidden bg-black"
    >
      <h2 className="absolute bottom-[10%] left-0 w-full pb-4 text-5xl font-bold">PROJECTS</h2>
      <AllProjects />
    </section>
  );
}
