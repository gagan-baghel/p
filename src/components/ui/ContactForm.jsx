import { GoMail } from "react-icons/go";
import { SiPostman } from "react-icons/si";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./animated-modal";

export function ContactForm() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl md:w-[600px] md:p-12">
      {/* Subtle glowing orb in background */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zinc-500/20 blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-zinc-700/20 blur-[80px]" />

      <div className="relative z-10">
        <div className="mb-8 flex items-center space-x-4 text-3xl font-bold tracking-tight text-white drop-shadow-md">
          <p>Drop a message</p>
          <GoMail className="text-zinc-400" />
        </div>

        <div className="group relative my-6">
          <input
            id="name"
            placeholder=" " // Keep empty for peer focus logic
            className="peer w-full border-b border-white/20 bg-transparent py-4 text-white outline-none transition-colors focus:border-white"
            type="text"
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-0 top-4 text-zinc-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-300"
          >
            Your Name
          </label>
        </div>

        <div className="group relative my-6">
          <input
            id="email"
            placeholder=" "
            className="peer w-full border-b border-white/20 bg-transparent py-4 text-white outline-none transition-colors focus:border-white"
            type="email"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-0 top-4 text-zinc-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-300"
          >
            Your Email
          </label>
        </div>

        <div className="group relative my-8">
          <textarea
            id="message"
            placeholder=" "
            className="peer w-full resize-none border-b border-white/20 bg-transparent py-4 text-white outline-none transition-colors focus:border-white"
            rows={4}
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-0 top-4 text-zinc-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-300"
          >
            Share your thoughts
          </label>
        </div>

        <Modal>
          <ModalTrigger className="group/modal-btn relative mt-8 flex w-full justify-center overflow-hidden rounded-full bg-zinc-100 py-4 font-semibold text-black transition-all hover:bg-white hover:shadow-[0_0_40px_-10px_rgba(255,255,255,1)]">
            <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-40">
              SEND INQUIRY
            </span>
            <span className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-black transition duration-500 group-hover/modal-btn:translate-x-0">
              <SiPostman className="h-6 w-6" />
            </span>
          </ModalTrigger>

          <ModalBody>
            <ModalContent>
              <h3 className="text-2xl font-bold text-black dark:text-white">Thanks for reaching out.</h3>
              <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                This portfolio contact flow is now wired correctly. I can connect it to email/API next.
              </p>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
