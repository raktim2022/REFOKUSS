import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setimages] = useState([
    {
      url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3",
      top: "69%",
      left: "63%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
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
