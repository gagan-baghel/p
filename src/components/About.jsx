import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen min-w-full items-center justify-center overflow-y-hidden bg-black"
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-[15%] left-[10%] pb-4 text-6xl md:text-8xl font-black text-zinc-800/50"
      >
        ABOUT
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 w-10/12 md:w-8/12 -translate-y-[20%] text-lg leading-relaxed md:text-2xl text-zinc-300"
      >
        <p className="italic mb-6">
          I am a self-learning and disciplined developer with strong fundamentals in programming, OOP,
          algorithms, design patterns, and data structures.
        </p>

        <p className="italic">
          I build full-stack web apps using HTML, CSS, Tailwind, JavaScript, React, Node.js, Express,
          and MongoDB. I am comfortable with Git/GitHub workflows and continuously improve through
          real project delivery.
        </p>
      </motion.div>
    </section>
  );
}
