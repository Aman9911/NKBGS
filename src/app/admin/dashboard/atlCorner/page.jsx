"use client";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import pdfUploadService from "@/appwrite/pdfUploadService";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";
import atlCornerService from "@/appwrite/appwriteAtlCorner";
import Image from "next/image";

const AtlCornerPage = () => {
  const [development, setDevelopment] = useState([]);

  const handleFileChange = async (file) => {
    const image = file ? await pdfUploadService.uploadFile(file) : null;
    if (image) {
      const data = await atlCornerService.createAtlCorner({
        name: image.name,
        link: image.$id,
        date: image.$createdAt.toLocaleString(),
      });
      setDevelopment([...development, data]);
      toast.success("Data uploaded successfully", { position: "top-right" });
    }
  };

  const handleFilePreview = async (id) => {
    try {
      const fileDownload = await pdfUploadService.getFileDownload(id);
      const blob = await fetch(fileDownload.href).then((res) => res.blob());
      const url = URL.createObjectURL(blob);
      if (url) {
        window.open(url);
      }
    } catch (error) {
      throw new Error("Sorry there is some issue in network", error);
    }
  };

  const handleDelete = (data) => {
    if (data) {
      atlCornerService.deleteAtlCorner(data.$id);
      pdfUploadService.deleteFile(data.link);
      setDevelopment(development.filter((mod) => mod !== data));
      toast.success("Data deleted successfully", { position: "top-right" });
    }
  };

  useEffect(() => {
    atlCornerService.getAtlCorner().then((data) => {
      if (data) {
        setDevelopment(data.documents);
      }
    });
  }, []);

  return (
    <>
      <ImageUpload onChange={handleFileChange} />
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {development.map((data) => (
          <div className="col-span-1 group" key={data.$id}>
            <div className="flex flex-col gap-2 w-full">
              <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
                <Image
                  height={1200}
                  width={1200}
                  src="/images/PDF.png"
                  alt="list"
                  className="object-cover h-full w-full cursor-pointer"
                  onClick={(e) => handleFilePreview(data.link)}
                />
                <div className="absolute cursor-pointer top-3 right-3 text-zinc-800 hover:text-zinc-950">
                  <MdCancel size={20} onClick={(e) => handleDelete(data)} />
                </div>
              </div>
              <div className="font-semibold text-base text-center cursor-pointer">
                {data.name.split(".")[0]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AtlCornerPage;
