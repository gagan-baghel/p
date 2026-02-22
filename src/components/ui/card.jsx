import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function BentoGridItem({ title = "The Art of Design", imgUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[450px] w-full max-w-[28rem] rounded-2xl bg-black/50 overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 md:w-full"
    >
      {/* Background Image that scales softly on hover */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 [transition-timing-function:cubic-bezier(0.33,1,0.68,1)] group-hover:scale-110"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

      {/* Information Container - Reveals on Hover */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="mb-2 text-3xl font-bold tracking-tight text-white drop-shadow-md">
          {title}
        </h3>
        <p className="text-zinc-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100 line-clamp-2">
          Discover the beauty of highly engineered, functional architecture and deep visual aesthetic. An exploration of elite UI.
        </p>

        {/* Animated Button */}
        <div className="mt-4 overflow-hidden h-0 opacity-0 transition-all duration-500 group-hover:h-12 group-hover:opacity-100 group-hover:mt-6">
          <button className="flex items-center space-x-2 text-sm font-semibold text-white tracking-widest uppercase pb-1 border-b border-white/30 hover:border-white transition-colors duration-300">
            <span>View Case Study</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}
