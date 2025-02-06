import Image from "next/image";
import React, { memo } from "react";

const DisplayLife = ({ name, image }) => {
  return (
    <div className="max-w-xs relative group overflow-hidden w-44 md:w-48 aos-init" data-aos="flip-left">
      <Image
        alt="life in nkbgs"
        src={image}
        width={1200}
        height={1200}
        className="max-w-full max-h-full object-contain transition duration-300 group-hover:z-10 group-hover:scale-105"
      />
      <div className="absolute top-10 w-28 -right-9 p-1.5 rounded-lg bg-black/25 rotate-90 text-white">
        <span className="block w-max font-bold">{name}</span>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-center font-extrabold">
        <h className="text-9xl">{name[0]}</h>
      </div>
    </div>
  );
};

export default memo(DisplayLife);
