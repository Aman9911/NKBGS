import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import React from "react";

const StudentCard = ({ data, tag }) => {
  if (tag === "loading") {
    return (
      <div className="flex justify-center flex-col items-center py-1 relative w-[17rem] animate-pulse">
        <div className="inset-0 rounded-xl shadow-2xl z-0 h-60 w-52 bg-purple-400" />
        <p className="text-gray-700  text-xl font-bold leading-8 h-4 w-36 mt-1 bg-purple-400 rounded-sm"></p>
        <p className="text-gray-700  text-xl font-bold leading-8 h-4 w-36 mt-1 bg-purple-400 rounded-sm"></p>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-col items-center py-1 relative w-[17rem]">
      {tag && (
        <Image
          height={1200}
          width={1200}
          alt="positionTag"
          src={`/images/position/${
            data.position === 1
              ? "first.png"
              : data.position === 2
              ? "second.png"
              : "third.png"
          }`}
          className="w-14 h-16 left-0 top-0 absolute z-10"
        />
      )}

      <Image
        width={1200}
        height={1200}
        className="inset-0 rounded-xl shadow-2xl z-0 h-60 w-52"
        src={imageUploadService.getPreview(data?.photo).href}
        alt="Student image"
      />
      <p className="text-gray-700  text-xl font-bold leading-8">{data?.name}</p>
      <p className="text-gray-700  text-xl font-bold leading-8">
        {data?.percentage}%
      </p>
      <p className="text-gray-700  text-xl font-bold leading-8">
        {data?.heading1}
      </p>
      <p className="text-gray-700  text-xl font-bold leading-8">
        {data?.heading2}
      </p>
    </div>
  );
};

export default StudentCard;
