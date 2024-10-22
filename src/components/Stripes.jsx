import React from "react";
import Stripe from "./Stripe";

const Stripes = () => {
  var data = [
    {
      image:
        "https://images.unsplash.com/photo-1721332149371-fa99da451baa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      number: "48",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmt8ZW58MHx8MHx8fDA%3D",
      number: "5",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530090382228-7195e08d7a75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHx8MHx8fDA%3D",
      number: "23",
    },
    {
      image:
        "https://images.unsplash.com/photo-1415356838286-df6fd593e8b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRhcmt8ZW58MHx8MHx8fDA%3D",
      number: "12",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1687572821942-d6f30f6b125d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRhcmt8ZW58MHx8MHx8fDA%3D",
      number: "49",
    },
  ];
  return (
    <div className="flex w-full  items-center">
      {data.map((elem, index) => (
        <Stripe key={index} image={elem.image} number={elem.number} />
      ))}
    </div>
  );
};

export default Stripes;
