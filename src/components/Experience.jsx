import { motion } from "framer-motion";

const milestones = [
    {
        year: "2018",
        role: "Computer Science Studies",
        description: "Deep dive into algorithms, data structures, and the fundamentals of software engineering.",
    },
    {
        year: "2020",
        role: "Junior Frontend Developer",
        description: "Built and maintained responsive web applications, focusing on React component architecture and state management.",
    },
    {
        year: "2022",
        role: "UI/UX Designer & Engineer",
        description: "Transitioned to a hybrid role, bridging the gap between high-fidelity Figma designs and production-ready React code.",
    },
    {
        year: "2024",
        role: "World-Class Freelancer",
        description: "Delivering massive, ultra-premium web experiences. Specializing in Framer Motion, 3D interactions, and elite aesthetic engineering.",
    },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full bg-black px-6 py-20 font-space sm:px-10 lg:flex lg:min-h-full lg:flex-col lg:justify-center lg:px-24 lg:py-0"
    >
      <div className="mb-12 w-full md:mb-16 lg:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-[0.25em] text-zinc-500 uppercase md:text-xl">
            The Journey
          </h2>
          <h3 className="font-archivo text-4xl font-black tracking-tighter text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Experience Timeline
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            A snapshot of how design thinking, frontend architecture, and product execution evolved through real client and product work.
          </p>
        </motion.div>
      </div>

      <div className="lg:hidden">
        <div className="relative ml-3 border-l border-white/15 pl-7">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative pb-10"
            >
              <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full border-2 border-zinc-500 bg-black transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="mb-2 block font-archivo text-4xl font-black tracking-tighter text-white select-none">
                {milestone.year}
              </span>
              <h4 className="mb-3 text-xl font-bold text-white drop-shadow-md">
                {milestone.role}
              </h4>
              <p className="text-base font-light leading-relaxed text-zinc-400">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden w-full overflow-x-auto pb-10 no-scrollbar lg:block">
        <div className="relative flex min-w-max items-center pr-24">
          <div className="absolute left-0 top-[20px] h-[1px] w-full bg-white/10" />
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 top-[19px] h-[3px] w-full bg-gradient-to-r from-zinc-600 via-zinc-300 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)]"
          />

          <div className="relative z-10 flex gap-12 md:gap-20 lg:gap-32">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group relative flex w-[300px] flex-shrink-0 flex-col items-start pt-16 md:w-[380px]"
              >
                <div className="absolute left-0 top-[16px] h-4 w-4 rounded-full border-2 border-zinc-500 bg-black transition-all duration-300 group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                <div className="ml-2 mt-4 border-l border-white/10 pl-6 transition-colors duration-300 group-hover:border-white/30">
                  <span className="mb-3 block font-archivo text-4xl font-black tracking-tighter text-white select-none md:text-6xl">
                    {milestone.year}
                  </span>
                  <h4 className="mb-4 text-xl font-bold text-white drop-shadow-md md:text-2xl">
                    {milestone.role}
                  </h4>
                  <p className="text-base font-light leading-relaxed text-zinc-400 md:text-lg">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
