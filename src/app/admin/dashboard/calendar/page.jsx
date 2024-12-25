"use client";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";
import imageUploadService from "@/appwrite/imageUploadService";
import calendarService from "@/appwrite/appwriteCalendar";
import Image from "next/image";

const Calendar = () => {
  const [development, setDevelopment] = useState([]);

  const handleFileChange = async (file) => {
    const image = file ? await imageUploadService.uploadFile(file) : null;
    if (image) {
      const data = await calendarService.createCalendar({
        name: image.name.split(".")[0],
        link: image.$id,
      });
      setDevelopment([...development, data]);
      toast.success("Data uploaded successfully", { position: "top-right" });
    }
  };

  const handleFilePreview = async (id) => {
    try {
      const fileDownload = imageUploadService.getPreview(id);
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
      calendarService.deleteCalendar(data.$id);
      imageUploadService.deleteFile(data.link);
      setDevelopment(development.filter((mod) => mod !== data));
      toast.success("Data deleted successfully", { position: "top-right" });
    }
  };

  useEffect(() => {
    calendarService.getCalendar().then((data) => {
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
                  width={1200}
                  height={1200}
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

export default Calendar;
