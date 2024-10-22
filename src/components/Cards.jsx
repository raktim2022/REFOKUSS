import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-32 flex gap-5">
        <div className="hover:bg-zinc-700 rounded-xl">
          <Card
            width={"basis-1/3"}
            start={false}
            para={true}
            hover={"bg-zinc-700"}
          />
        </div>
        <div className="hover:bg-violet-600 rounded-xl">
          <Card
            width={"basis-2/3"}
            start={true}
            para={false}
            hover={"bg-violet-600"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
