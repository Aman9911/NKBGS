"use client";
import React from "react";
import { MdCancel } from "react-icons/md";
import toast from "react-hot-toast";
import previousYearPaperService from "@/appwrite/appwritePreviousYearPaper";
import pdfUploadService from "@/appwrite/pdfUploadService";
import Image from "next/image";

const PDFCard = ({ data, setPreviousPaper, previousPaper }) => {
  const handleOnDelete = async (data) => {
    if (data) {
      await previousYearPaperService.deletePreviousYearPaper(data.$id);
      await pdfUploadService.deleteFile(data.fileData);
      setPreviousPaper(() =>
        previousPaper.filter((paper) => paper.$id !== data.$id)
      );
      toast.success("Data deleted successfully", { position: "top-right" });
    }
  };

  return (
    <div className="col-span-1  group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
          <Image
            width={1200}
            height={1200}
            src="/images/PDF.png"
            alt="list"
            className="object-cover h-full w-full cursor-pointer"
          />
          <div className="absolute cursor-pointer top-3 right-3 text-zinc-800 hover:text-zinc-950">
            <MdCancel size={20} onClick={() => handleOnDelete(data)} />
          </div>
        </div>
        <div className="font-semibold text-lg cursor-pointer">
          {data.title ||
            data.class +
              " " +
              data.examType +
              " " +
              data.subject +
              " " +
              data.session}
        </div>
      </div>
    </div>
  );
};

export default PDFCard;
