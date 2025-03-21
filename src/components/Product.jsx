import React from "react";
import Button from "./Button";
const Product = ({ val, mover, count }) => {
  return (
    <div
      onMouseEnter={() => {
        mover(count);
      }}
      className="w-full py-16"
    >
      <div className="max-w-screen-xl mx-auto px-8 flex items-center justify-between">
        <h1 className="text-6xl capitalize font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
