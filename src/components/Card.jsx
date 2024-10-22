import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover }) => { 
  return (
    <div
      className={`${width} bg-zinc-800 p-5 hover:${hover} h-full rounded-xl relative`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever Heading.</h1>
      </div>
      <div className="down w-full mt-56">
        {start && (
          <div>
            <h1 className="text-8xl font-semibold tracking-tighter capitalize leading-none">
              start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </div>
        )}
        {para && (
          <p className=" text-sm mt-3 absolute bottom-5 text-zinc-500">
            Explore what drives our team
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
