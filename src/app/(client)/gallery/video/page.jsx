"use client";
import galleryVideoService from "@/appwrite/appwriteGalleryVideo";
import React, { useEffect, useState } from "react";

const Video = () => {
  const [infrastructure, setInfrastructure] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    galleryVideoService.getVideo().then((video) => {
      if (video) {
        setInfrastructure(video.documents.reverse());
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return (
      <div className="relative mt-6 lg:mx-[5%]">
        <div className="space-x-0 space-y-4  mx-auto flex flex-col justify-center items-center md:flex-row md:flex-wrap md:space-y-2 md:space-x-2 ">
          <div className="relative text-center">
            <div className="md:flex md:gap-x-8 md:px-3 md:flex-wrap md:justify-center md:items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="shadow-2xl w-[314px] border border-blue-300 md:w-[356px] mb-20 relative rounded-xl md:hover:-translate-y-2 md:transition md:ease-in-out "
                >
                  <iframe
                    alt="infra"
                    className="inset-0 animate-pulse bg-slate-200 w-full h-[275px]  rounded-xl shadow-2xl  z-0  "
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative mt-6 lg:mx-[5%]">
      <div className="space-x-0 space-y-4 mx-auto flex flex-col justify-center items-center md:flex-row md:flex-wrap md:space-y-2 md:space-x-2 ">
        <div className="relative  text-center">
          <div className="md:flex md:gap-x-8 md:px-3 md:flex-wrap md:justify-center md:items-center">
            {infrastructure?.map((infra) => (
              <div
                key={infra.$id}
                className="shadow-2xl w-[314px] md:w-[356px] mb-20 relative rounded-xl md:hover:-translate-y-2 md:transition md:ease-in-out "
              >
                <iframe
                  src={`https://www.youtube.com/embed/${infra.videoLink}`}
                  alt="infra"
                  width={2560}
                  height={1440}
                  className="inset-0 w-full h-[275px] rounded-xl shadow-2xl z-0"
                ></iframe>
                <div className="truncate overflow-hidden text-ellipsis hover:whitespace-normal pt-1 w-full cursor-pointer uppercase text-lg justify-center items-center text-center z-30 absolute">
                  {infra.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
