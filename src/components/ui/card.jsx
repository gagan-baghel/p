import { cn } from "../../services/lib/utils";
import {
    IconSignature,
  } from "@tabler/icons-react";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        "md:col-span-2"
      )}
    >
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
      <IconSignature className="h-4 w-4 text-neutral-500" />
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        The Art of Design
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        Discover the beauty of thoughtful and functional design.
        </div>
      </div>
    </div>
  );
};
