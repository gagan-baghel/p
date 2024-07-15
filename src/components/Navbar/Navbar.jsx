import {useState} from 'react'

import { GoHomeFill } from "react-icons/go";
import { FaAddressBook } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa";


export const Navbar = () => {

 
  return (<nav className="flex justify-between items-center flex-col border border-1 border-white rounded-xl fixed p-6 w-[30px] space-y-4 top-[50%] -translate-y-[50%] left-12 z-50 text-2xl bg-black">

        <div className=" p-3 rounded-full ">
            <GoHomeFill />
        </div>

        <div className=" p-3 rounded-full ">
        <FaFolderOpen />
        </div>

        <div className=" p-3 rounded-full ">
        <FaLaptopCode />
        </div>

        <div className=" p-3 rounded-full ">
        <FaAddressBook/>
        </div>

    </nav>)
}