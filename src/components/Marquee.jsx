import React from "react";
import { motion } from "framer-motion";
const Marquee = ({ imageurl, direction }) => {
  return (
    <div className="flex w-full bg-gradient-to-b from-zinc-900 via-zinc-500 to-zinc-900  overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-24 pr-20 py-10"
      >
        {imageurl.map((url, index) => (
          <img src={url} key={index} className="w-32" alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex  flex-shrink-0 gap-24 pr-20  py-10"
      >
        {imageurl.map((url, index) => (
          <img src={url} key={index} className="w-32" alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
