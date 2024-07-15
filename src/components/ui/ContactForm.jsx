import React from 'react'
import { GoMail } from "react-icons/go";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
  } from "./animated-modal";
  import { SiPostman } from "react-icons/si";

export const ContactForm = () => {
  return (
    <div className="w-1/2 h-full rounded-sm py-8 px-12 -translate-y-10">

        <div className="flex items-center justify-center space-x-4 text-2xl font-bold py-2"> <p>DROP</p>  <GoMail /> </div>
        
        <input placeholder='Your Name' className="w-full bg-transparent border-b my-4 py-3 outline-none" type="text" />

        <input placeholder='Your Email' className="w-full bg-transparent border-b my-4 py-3 outline-none" type="text" />

        <textarea placeholder='                                                                                                                                                                                                                                 Share Your Thoughts ' className="w-full bg-transparent border-b my-4 py-3 resize-none outline-none" name="" id=""></textarea>
        <Modal>
        <ModalTrigger className="bg-transparent border-t border-b  text-white flex justify-center group/modal-btn my-4">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            SUBMIT
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <SiPostman />
          </div>
        </ModalTrigger>
        </Modal>

    </div>
  )
}
