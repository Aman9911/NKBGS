"use client";
import PhotoModal from "@/app/components/client/modals/PhotoModal";
import galleryService from "@/appwrite/appwriteGallery";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Photo = () => {
  const [toggle, setToggle] = useState(false);
  const [clickData, setClickData] = useState(null);
  const [infrastructure, setInfrastructure] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    galleryService.getPhoto().then((infra) => {
      if (infra) {
        setInfrastructure(infra.documents.reverse());
        setLoading(false);
      }
    });
  }, []);
  const handleClick = (data) => {
    setClickData(data);
    setToggle(!toggle);
  };
  if (loading) {
    return (
      <div className="relative mt-6 lg:mx-[5%]">
        <div className="space-x-0 space-y-4  mx-auto flex flex-col justify-center items-center md:flex-row md:flex-wrap md:space-y-2 md:space-x-2 ">
          <div className="relative  text-center">
            <div className="md:flex md:gap-x-8 md:px-3 md:flex-wrap md:justify-center md:items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="shadow-2xl border border-blue-300 animate-pulse w-[314px] md:w-[356px] mb-14 relative rounded-xl md:hover:-translate-y-2 md:transition md:ease-in-out "
                >
                  <div className="inset-0 w-full h-[275px] bg-slate-200 rounded-xl shadow-2xl  z-0 " />
                  <div className="md:flex md:mt-0 pt-1 w-full cursor-pointer uppercase text-lg md:text-2xl justify-center items-center md:opacity-0 md:ease-in-out md:duration-100 hover:opacity-100 hover:bg-black/50 hover:rounded-xl md:text-white md:inset-0 text-center z-30 absolute animate-bounce sm:animate-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <PhotoModal toggle={toggle} setToggle={setToggle} clickData={clickData} />
      <div className="relative mt-6 lg:mx-[5%]">
        <div className="space-x-0 space-y-4  mx-auto flex flex-col justify-center items-center md:flex-row md:flex-wrap md:space-y-2 md:space-x-2 ">
          <div className="relative  text-center">
            <div className="md:flex md:gap-x-8 md:px-3 md:flex-wrap md:justify-center md:items-center">
              {infrastructure?.map((infra, index) => (
                <div
                  key={infra.$id || index}
                  onClick={() => handleClick(infra)}
                  className="shadow-2xl w-[314px] md:w-[356px] mb-14 relative rounded-xl md:hover:-translate-y-2 md:transition md:ease-in-out "
                >
                  <Image
                    src={imageUploadService.getPreview(infra.link[0]).href}
                    alt="infra"
                    width={2560}
                    height={1440}
                    className="inset-0 w-full h-[275px]  rounded-xl shadow-2xl  z-0 "
                    priority={true}
                  />
                  <div className="md:flex md:mt-0 pt-1 w-full cursor-pointer uppercase text-lg md:text-2xl justify-center items-center md:opacity-0 md:ease-in-out md:duration-100 hover:opacity-100 hover:bg-black/50 hover:rounded-xl md:text-white md:inset-0 text-center z-30 absolute animate-bounce sm:animate-none">
                    {infra.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
