import Image from "next/image";
import React, { memo } from "react";
import imageUploadService from "@/appwrite/imageUploadService";

const Message = ({ heading, content, pic, writer, color }) => {
  return (
    <div className="relative aos-init" data-aos="fade-right">
      <div
        className={`border-2  shadow-xl m-4 rounded-xl border-white ${
          color ? color : "bg-teal-400/40"
        }`}
      >
        <h3 className="font-bold text-center text-xl md:text-2xl m-0 p-1 sm:pt-2">
          {heading}
        </h3>
        {pic && (
          <div className="float-right mx-3.5 md:mr-2 shadow-lg rounded-xl font-bold">
            <Image
              src={imageUploadService.getPreview(pic).href}
              width={250}
              height={250}
              alt="Pic"
              className="rounded-xl w-[250px] h-[262px]"
            />
            <p className="text-center text-xs  md:text-lg  italic mr-5">
              {writer}
            </p>
          </div>
        )}
        <p
          className="text-left text-xs px-3 sm:text-lg md:pt-3 "
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
      </div>
    </div>
  );
};

export default memo(Message);
