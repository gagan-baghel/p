import { motion } from "framer-motion";
import Image from "next/image";
import pm from "../assets/pm.jpeg";
import { ContactForm } from "./ui/ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen min-w-full items-center justify-center overflow-y-hidden bg-black"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="absolute left-[5%] top-[5%] md:left-[10%] md:top-[10%] z-0 pb-4 text-5xl md:text-7xl font-bold text-zinc-800"
      >
        CONTACT
      </motion.h2>

      <div className="z-10 flex w-11/12 md:w-8/12 flex-col md:flex-row mt-16 md:mt-0 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex w-full items-center justify-center md:w-1/2"
        >
          <Image
            src={pm}
            alt="Mailman Illustration"
            className="w-full max-w-sm rounded-xl object-cover opacity-80"
            sizes="(max-width: 768px) 90vw, 40vw"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
