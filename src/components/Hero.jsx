import { motion } from "framer-motion";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen min-w-full items-center justify-center overflow-y-hidden bg-black"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 w-[600px] -translate-x-12 -translate-y-12 px-8 md:px-0"
      >
        <motion.p variants={itemVariants} className="mb-2 text-xl font-medium tracking-wide text-zinc-500">
          Hi, my name is
        </motion.p>
        <motion.h1 variants={itemVariants} className="max-w-4xl">
          <span className="block pb-2 text-[5rem] font-black leading-none tracking-tighter text-white md:text-[7rem]">
            Gagan Baghel
          </span>
          <span className="block pb-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent md:text-5xl">
            Freelance Web Developer & Designer
          </span>
        </motion.h1>
        <motion.p variants={itemVariants} className="max-w-xl text-xl font-light leading-relaxed text-zinc-400">
          Crafting engaging, world-class web experiences with React and UI/UX expertise.
        </motion.p>
      </motion.div>
    </section>
  );
}
