import React from "react";

const Stripe = ({ image, number }) => {
  return (
    <div className="max-w-72 w-full  px-6 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
      <span>
        <img className="w-32 h-12 object-cover" src={image} alt="" />
      </span>
      <span className="font-semibold">{number}</span>
    </div>
  );
};

export default Stripe;
