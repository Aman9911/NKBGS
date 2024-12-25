import Image from "next/image";
import React from "react";

const VisionCard = ({ heading, content, pic, writer }) => {
  return (
    <div className="border border-gray-300 shadow-xl  rounded-lg overflow-hidden max-w-4xl mx-auto my-6 p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{heading}</h3>
      {pic && (
        <div className="float-right w-48 h-48 ml-4 mb-2 relative">
          <Image
            src={pic}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
      <div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{content}</p>
        {writer && (
          <p className="italic text-gray-500 text-right">- {writer}</p>
        )}
      </div>
    </div>
  );
};

export default VisionCard;
