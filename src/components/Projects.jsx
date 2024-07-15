import React from "react";
import {BentoGridItem} from './ui/card'
import { GiComputerFan } from "react-icons/gi";

import { AllProjects } from "./ui/AllProjects";

export const Projects = () => {
  return (
    <div className="min-h-screen min-w-full w-full bg-black items-center justify-center flex  overflow-y-hidden relative">
      <div className="text-5xl font-bold pb-4 absolute bottom-[10%] left-[0] w-full">
        {" "}
        PROJECTS{" "}
      </div>

      {/* <div className="w-8/12 ">

        <div className=" flex justify-around items-center ">

            <div className=" flex flex-col justify-between items-center w-60">
            <BentoGridItem/>
            <div className="h-10 border w-0 relative flex justify-center items-center"> 
                <div className="h-3 w-3 bg-white rounded-full absolute translate-y-[50%] bottom-0 border-2 border-black"></div>
            </div>
            </div>
            <div className=" flex flex-col justify-between items-center w-60">
                <BentoGridItem/>
                <div className="h-10 border w-0 relative flex justify-center items-center"> 
                <div className="h-3 w-3 bg-white rounded-full absolute translate-y-[50%] bottom-0 border-2 border-black"></div>
                </div>
            </div>

        </div>

        <div className="border"></div>

        <div className=" flex justify-center items-center ">

    

            <div className=" flex flex-col justify-between items-center w-60">
            <div className="h-10 border w-0 relative flex justify-center items-center"> 
                <div className="h-3 w-3 bg-white rounded-full absolute -translate-y-[50%] top-0 border-2 border-black"></div>
            </div>
              
                    <BentoGridItem/>
               
            </div>

        </div>

      </div> */}

      <AllProjects/>


    </div>
  );
};
