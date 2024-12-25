"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdCancel } from "react-icons/md";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";

const InfoCard = ({ data, handleOnDelete, path }) => {
  const thumbnail = imageUploadService.getPreview(data.thumbnail || data);
  const router = useRouter();
  return (
    <div className="col-span-1  group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
          <Image
                    width={1200}
                    height={1200}
            src={thumbnail.href}
            alt="list"
            className="object-cover h-full w-full "
          />
          <div className="absolute cursor-pointer top-3 right-3 text-zinc-800 hover:text-zinc-950">
            <MdCancel size={20} onClick={() => handleOnDelete(data)} />
          </div>
        </div>
        <div
          className="font-semibold text-lg cursor-pointer"
          onClick={() => router.push(`${path}/${data.$id}`)}
        >
          {data.title || data.class + " " + data.examType}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
