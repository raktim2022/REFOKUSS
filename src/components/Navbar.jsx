import React from "react";
import img1 from "../assets/6669a1a4bcfb20e56e7cdd97_refokus_keyvisual_purple_animation_alpha_2800x1680_00.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-lg px-5 h-9 mb-3 mx-auto py-8 flex items-center justify-between border-b-[1px] border-zinc-600">
      <div className="nleft flex items-center">
        <img src={img1} className="w-10" alt="" />
        <div className="links flex gap-14 ml-20">
          {["home", "work", "culture", "", "news"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-6 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex capitalize items-center gap-1"
                href="#"
              >
                {index === 1 && (
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
