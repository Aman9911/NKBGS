import Image from "next/image";
import React, { memo } from "react";
import imageUploadService from "@/appwrite/imageUploadService";
import useMediaQuery from "@/hooks/useMediaQuery";

const InfrastructureFullPage = ({ heading, content, pic, color }) => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  return (
    <>
      {isSmallScreen ? (
        <div className="relative">
          <div
            className={`border-2 w-fit  shadow-xl m-4 rounded-xl border-white ${
              color ? color : "bg-sky-400/40"
            }`}
          >
            <h3 className="font-bold text-cyan-900 text-center text-xl  m-0 p-1 sm:pt-2">
              {heading}
            </h3>
            {pic && (
              <div className="flex items-center justify-center mx-3.5  text-cyan-100 font-bold">
                <Image
                  src={imageUploadService.getPreview(pic).href}
                  width={1280}
                  height={720}
                  alt="Pic"
                  className="rounded-xl w-full h-full shadow-xl"
                />
              </div>
            )}
            <p
              className="text-left text-xs px-3 sm:text-lg"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
      ) : (
        <div className="relative w-fill border-2 w-96 md:w-fit shadow-xl m-4 rounded-xl border-white bg-sky-400/40">
          {pic && (
            <div className=" ">
              <Image
                src={imageUploadService.getPreview(pic).href}
                width={1280}
                height={720}
                alt="Pic"
                className="rounded-xl"
              />
            </div>
          )}
          <div className="absolute rounded-b-xl bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
            <h3 className="text-2xl text-white font-bold">{heading}</h3>
            <p
              className="mt-2 text-base text-gray-300"
              dangerouslySetInnerHTML={{ __html: content }}
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(InfrastructureFullPage);
