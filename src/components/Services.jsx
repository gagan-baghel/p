import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { IconCode, IconPalette, IconServer } from "@tabler/icons-react";

const services = [
    {
        title: "Frontend Engineering",
        description: "Architecting pixel-perfect, highly complex user interfaces with React, Next.js, and Framer Motion. Ensuring 60fps animations and flawless responsive design.",
        icon: <IconCode className="h-8 w-8 text-neutral-300" />,
    },
    {
        title: "UI/UX & Interaction",
        description: "Designing premium, cinematic aesthetic experiences. From deep user research to prototyping glowing glassmorphism and 3D architectural tilt layouts.",
        icon: <IconPalette className="h-8 w-8 text-neutral-300" />,
    },
    {
        title: "Backend & Systems",
        description: "Building robust Node.js server architectures, designing scalable database schemas, and integrating secure API layers to power the frontend seamlessly.",
        icon: <IconServer className="h-8 w-8 text-neutral-300" />,
    },
];

export function Services() {
    return (
        <section id="services" className="flex h-full w-full flex-col justify-center px-12 md:px-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="mb-16"
            >
                <h2 className="text-xl font-medium tracking-widest text-zinc-500 uppercase mb-2">Capabilities</h2>
                <h3 className="text-5xl font-black text-white md:text-6xl tracking-tighter">My Core Services</h3>
            </motion.div>

            <div className="flex gap-8 group">
                {services.map((service, idx) => (
                    <ServiceCard key={idx} service={service} />
                ))}
            </div>
        </section>
    );
}

function ServiceCard({ service }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group/card relative flex h-96 w-96 flex-col justify-between rounded-xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900 overflow-hidden transition-colors duration-500 flex-shrink-0 backdrop-blur-sm"
        >
            {/* Spotlight Hover Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/card:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />

            <div className="z-10 bg-black/50 w-16 h-16 rounded-full flex items-center justify-center border border-white/10 shadow-lg mb-8">
                {service.icon}
            </div>

            <div className="z-10">
                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                    {service.title}
                </h4>
                <p className="text-zinc-400 leading-relaxed font-light">
                    {service.description}
                </p>
            </div>
        </div>
    );
}
