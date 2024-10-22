import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "get started" }) => {
  return (
    <div className=" cursor-pointer min-w-32 w-fit px-5 py-2 flex items-center justify-between bg-zinc-100 text-black rounded-full">
      <span className="text-md capitalize mr-2  font-semibold">{title}</span>
      <IoIosReturnRight className="text-xl" />
    </div>
  );
};

export default Button;
