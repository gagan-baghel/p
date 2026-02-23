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
        <section id="experience" className="relative flex h-full w-full items-center justify-start px-12 md:px-24">
            {/* Title Area */}
            <div className="absolute top-32 left-12 md:left-24">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl font-medium tracking-widest text-zinc-500 uppercase mb-2">The Journey</h2>
                    <h3 className="text-5xl font-black text-white md:text-6xl tracking-tighter">Experience Timeline</h3>
                </motion.div>
            </div>

            {/* Timeline Wrapper */}
            <div className="mt-40 relative flex items-center">
                {/* Horizontal Tracking Line */}
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />

                {/* Dynamic Glow Line that stretches with scroll (Approximated with a static glow for now mapping to viewport) */}
                <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 via-zinc-200 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />

                <div className="flex gap-8 md:gap-12 lg:gap-16 relative z-10 px-8">
                    {milestones.map((milestone, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="relative w-64 md:w-72 flex-shrink-0 flex flex-col items-start"
                        >
                            {/* Timeline Node */}
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full border-4 border-black bg-zinc-200 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                            {/* Content Box */}
                            <div className="mb-12 mt-4 pl-4 border-l border-white/20 ml-2">
                                <span className="text-4xl font-black text-white/20 tracking-tighter block mb-2">{milestone.year}</span>
                                <h4 className="text-2xl font-bold text-white mb-3 drop-shadow-md">{milestone.role}</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">{milestone.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
