import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen min-w-full items-center justify-center overflow-hidden bg-black font-space"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="h-[30rem] w-[30rem] md:h-[40rem] md:w-[40rem] rounded-full bg-zinc-800/30 blur-[100px]" />
      </div>

      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-[10%] md:bottom-[15%] left-[5%] md:left-[10%] pb-4 text-7xl md:text-9xl font-black text-zinc-800/40 font-archivo z-10 tracking-tighter"
      >
        ABOUT
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-20 w-11/12 md:w-8/12 lg:w-6/12 -translate-y-[10%] text-xl leading-relaxed md:text-3xl text-zinc-200 font-light"
      >
        <p className="mb-8 drop-shadow-sm">
          I am a self-learning and disciplined developer, forging premium digital realities with intense focus on OOP, architecture, and aesthetics.
        </p>

        <p className="drop-shadow-sm text-zinc-400">
          Crafting world-class experiences using React, Next.js, Framer Motion, and robust Node.js backends. I don&apos;t just write code; I engineer digital art.
        </p>
      </motion.div>
    </section>
  );
}
