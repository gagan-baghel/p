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
        <section id="experience" className="relative flex h-full w-full flex-col justify-center px-12 md:px-24 font-space bg-black">
            {/* Title Area */}
            <div className="w-full mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl font-medium tracking-widest text-zinc-500 uppercase mb-2">The Journey</h2>
                    <h3 className="text-5xl font-black text-white md:text-6xl tracking-tighter font-archivo drop-shadow-lg">Experience Timeline</h3>
                </motion.div>
            </div>

            {/* Timeline Wrapper inside a scrollable container */}
            <div className="w-full overflow-x-auto no-scrollbar pb-10 cursor-grab active:cursor-grabbing">
                <div className="relative flex items-center min-w-max pr-24">
                    {/* Horizontal Tracking Line */}
                    <div className="absolute left-0 top-[20px] h-[1px] w-full bg-white/10" />

                    {/* Glowing Line */}
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-0 top-[19px] h-[3px] w-full bg-gradient-to-r from-zinc-600 via-zinc-300 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                    />

                    <div className="flex gap-12 md:gap-20 lg:gap-32 relative z-10">
                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative w-[300px] md:w-[380px] flex-shrink-0 flex flex-col items-start pt-16 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute top-[16px] left-0 h-4 w-4 rounded-full border-2 border-zinc-500 bg-black group-hover:border-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" />

                                {/* Content Box */}
                                <div className="mt-4 pl-6 border-l border-white/10 ml-2 group-hover:border-white/30 transition-colors duration-300">
                                    <span className="text-4xl md:text-6xl font-black text-white/5 tracking-tighter block mb-3 font-archivo select-none">{milestone.year}</span>
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-md">{milestone.role}</h4>
                                    <p className="text-zinc-400 font-light leading-relaxed text-base md:text-lg">{milestone.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
