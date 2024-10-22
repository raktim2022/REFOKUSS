import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setimages] = useState([
    {
      url: "https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661297491323-ef16c1da1fec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1592323731803-7c1fc65b1666?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "69%",
      left: "63%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1599729823140-48447e72c14b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "63%",
      left: "53%",
      isActive: false,
    },
  ]);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 5:
        imageShow([0, 1, 2, 3, 4]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className=" text-[30vw] leading-none select-none font-medium tracking-tighter">
          Work
        </h1>
        <div className="w-full h-full absolute top-0">
          {images.map(
            (item, index) =>
              item.isActive && (
                <img
                  key={index}
                  className="w-60 rounded-lg h-60 absolute object-cover -translate-x-1/2 -translate-y-1/2"
                  style={{ top: item.top, left: item.left }}
                  src={item.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
