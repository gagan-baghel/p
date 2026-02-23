import { BentoGridItem } from "./card";

export function AllProjects() {
  return (
    <div className="flex h-full w-full items-center justify-start gap-12 px-12 md:px-24 overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing">
      {/* We add dummy projects here to fill the horizontal space and demonstrate the scroll */}
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>
      <div className="flex-shrink-0 w-[400px] sm:w-[500px] snap-center">
        <BentoGridItem />
      </div>

      {/* Spacer item at the end to give padding before the next section */}
      <div className="flex-shrink-0 w-[20vw]" />
    </div>
  );
}
