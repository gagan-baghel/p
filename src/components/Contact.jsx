import React from 'react'
import { ContactForm } from './ui/ContactForm'
import pm from '../assets/pm.jpeg'

export const Contact = () => {
  return (
    <div className="min-h-screen min-w-full bg-black flex items-center justify-center overflow-y-hidden relative">

        <div className="text-5xl font-bold pb-4 absolute top-[10%] left-[10%] z-20"> CONTACT </div>
        
        <div className="w-8/12 flex ">
        
            <div className=" w-1/2 flex justify-center items-center">
                    <img src={pm} className=' opacity-80 ' alt="" />
            </div>

             <ContactForm/>

        </div>

        
    </div>
  )
}
