import { GoMail } from "react-icons/go";
import { SiPostman } from "react-icons/si";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./animated-modal";

export function ContactForm() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_14px_45px_-28px_rgba(255,255,255,0.38)] backdrop-blur-xl sm:p-8 md:p-10">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zinc-500/20 blur-[80px]" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-zinc-700/20 blur-[80px]" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center space-x-3 text-2xl font-bold tracking-tight text-white drop-shadow-md sm:mb-8 sm:space-x-4 sm:text-3xl">
          <p>Drop a message</p>
          <GoMail className="text-zinc-400" />
        </div>

        <div className="group relative my-6">
          <input
            id="name"
            placeholder=" " // Keep empty for peer focus logic
            className="peer w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-white sm:py-4"
            type="text"
          />
          <label
            htmlFor="name"
            className="pointer-events-none absolute left-0 top-4 text-zinc-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-200"
          >
            Your Name
          </label>
        </div>

        <div className="group relative my-6">
          <input
            id="email"
            placeholder=" "
            className="peer w-full border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-white sm:py-4"
            type="email"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-0 top-4 text-zinc-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-200"
          >
            Your Email
          </label>
        </div>

        <div className="group relative my-8">
          <textarea
            id="message"
            placeholder=" "
            className="peer w-full resize-none border-b border-white/20 bg-transparent py-3 text-white outline-none transition-colors focus:border-white sm:py-4"
            rows={4}
          />
          <label
            htmlFor="message"
            className="pointer-events-none absolute left-0 top-4 text-zinc-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-200"
          >
            Share your thoughts
          </label>
        </div>

        <Modal>
          <ModalTrigger className="group/modal-btn relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-100 py-3 text-sm font-bold tracking-[0.15em] text-black uppercase transition-all hover:bg-white hover:shadow-[0_0_40px_-10px_rgba(255,255,255,1)] sm:mt-8 sm:py-4">
            <span className="text-center text-black">
              SEND INQUIRY
            </span>
            <SiPostman className="h-4 w-4 text-black transition-transform duration-300 group-hover/modal-btn:translate-x-1" />
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
