import { BentoGridItem } from "./card";

const projects = [
  {
    title: "The Art of Design",
    description:
      "A high-contrast creative direction site where interaction and typography lead storytelling.",
    imgUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    category: "Brand Experience",
    year: "2025",
  },
  {
    title: "Velocity Commerce",
    description:
      "Premium ecommerce frontend focused on fast product discovery, motion-led UX, and conversion quality.",
    imgUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    category: "Ecommerce",
    year: "2024",
  },
  {
    title: "Studio Pulse",
    description:
      "A modular agency website with animated case transitions and maintainable content blocks.",
    imgUrl:
      "https://images.unsplash.com/photo-1515378791036-0648a814c963?q=80&w=2000&auto=format&fit=crop",
    category: "Agency Platform",
    year: "2024",
  },
  {
    title: "Insight Dashboard",
    description:
      "Data product interface balancing dense analytics with clean hierarchy and strong readability.",
    imgUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    category: "SaaS Dashboard",
    year: "2023",
  },
  {
    title: "Motion Identity",
    description:
      "Interactive portfolio concept combining cinematic gradients, fluid motion, and bold type systems.",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2000&auto=format&fit=crop",
    category: "Portfolio",
    year: "2023",
  },
];

export function AllProjects() {
  return (
    <div className="flex h-full w-full flex-col gap-6 px-0 sm:gap-7 lg:flex-row lg:items-center lg:justify-start lg:gap-10 lg:px-12 lg:overflow-x-auto lg:snap-x lg:snap-mandatory lg:cursor-grab lg:active:cursor-grabbing lg:no-scrollbar">
      {projects.map((project) => (
        <div
          key={`${project.title}-${project.year}`}
          className="mx-auto w-full max-w-xl lg:mx-0 lg:w-[430px] lg:max-w-none lg:flex-shrink-0 lg:snap-center xl:w-[500px]"
        >
          <BentoGridItem {...project} />
        </div>
      ))}
      <div className="hidden w-[20vw] flex-shrink-0 lg:block" />
    </div>
  );
}
