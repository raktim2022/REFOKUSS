import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Product from "./Product";

const Products = () => {
  const [product, setproduct] = useState([
    {
      title: "arquitel",
      description:
        "arquitel de arquivo de arqu Republic of People (arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic)))",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "arquitel de arquivo de arqu Republic of People (arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic)))",
      live: true,
      case: false,
    },
    {
      title: "YYR 2022",
      description:
        "arquitel de arquivo de arqu Republic of People (arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic)))",
      live: true,
      case: false,
    },
    {
      title: "Yahhoo",
      description:
        "arquitel de arquivo de arqu Republic of People (arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic)))",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      description:
        "arquitel de arquivo de arqu Republic of People (arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic of People ( arqu Republic)))",
      live: true,
      case: false,
    },
  ]);

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 19.1);
    setproduct((prev) => {
      return prev.map((item, index) => {
        if (index === val) {
          return { ...item, case: true };
        } else return { ...item, case: false };
      });
    });
  };

  return (
    <div className="mt-32 relative">
      {product.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="w-full h-full pointer-events-none absolute top-0 ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          className=" window w-[28rem] h-[19rem] absolute  left-[43%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1728568724868-5d24ac1238ec?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1724017318507-4ace820f33b7?q=80&w=1397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1727206407687-81a7448e7c7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 0.4 }}
            className="w-full h-full"
          >
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1727946238611-f40feae6e4c9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
