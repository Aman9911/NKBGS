"use client";
import { memo } from "react";
import DisplayLife from "./DisplayLife";

const data = [
  { name: "Innovation", image: "/images/life/innovation.jpeg" },
  { name: "Mathematics", image: "/images/life/mathematics.jpg" },
  { name: "Physics", image: "/images/life/physics.jpeg" },
  { name: "Arts", image: "/images/life/art.jpg" },
  { name: "Computing", image: "/images/life/computing.jpeg" },
  { name: "Technology", image: "/images/life/technology.jpg" },
];

const Life = () => {
  return (
    <div className="text-center" >
      <h1 className="font-bold text-xl lg:text-5xl md:text-5xl">
        Life at NKBGS
      </h1>
      <p className="text-lg lg:text-2xl md:text-2xl font-semibold">
        Transforming Ideas into Impact
      </p>
       <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:flex lg:flex-row lg:my-5">
      {data.map((item) => (
          <DisplayLife key={item.name} name={item.name} image={item.image} />
        ))}
         </div>
    </div>
  );
};

export default memo(Life);
