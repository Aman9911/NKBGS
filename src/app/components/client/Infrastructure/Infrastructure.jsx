"use client";
import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import infrastructureService from "@/appwrite/appwriteInfrastructure";
import imageUploadService from "@/appwrite/imageUploadService";
import Link from "next/link";

const Infrastructure = () => {
  const [infrastructure, setInfrastructure] = useState([]);
  useEffect(() => {
    infrastructureService.getInfrastructure().then((infra) => {
      if (infra) {
        setInfrastructure(infra.documents.slice(0, 6));
      }
    });
  }, []);

  return (
    <>
      {infrastructure?.map((infra) => (
        <div
        data-aos="flip-up"
          key={infra.$id}
          className="shadow-2xl w-[314px] md:w-[356px] mb-14 relative rounded-xl md:hover:-translate-y-2 md:transition md:ease-in-out aos-init"
        >
          <Link href={`/infrastructure/${infra.title.replace(" ", "_")}`}>
            <Image
              src={imageUploadService.getPreview(infra.thumbnail).href}
              alt="infra"
              width={2560}
              height={1440}
              className="inset-0 w-[356px] h-[275px]  rounded-xl shadow-2xl  z-0  "
            />
            <div className="md:flex md:mt-0 pt-1 w-full cursor-pointer uppercase text-lg md:text-2xl justify-center items-center md:opacity-0 md:ease-in-out md:duration-100 hover:opacity-100 hover:bg-black/50 hover:rounded-xl md:text-white md:inset-0 text-center z-30 absolute animate-bounce sm:animate-none">
              {infra.title}
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default memo(Infrastructure);
