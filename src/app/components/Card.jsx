"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import toast from "react-hot-toast";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";

const handleCopy = (event, text) => {
  event.preventDefault();
  navigator.clipboard.writeText(text);
  toast.success("Text copied", { position: "top-right" });
};

const Card = ({ modals, handleDelete }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {modals?.map((modal, index) => (
            <div
              key={modal.$id || index}
              className="group mb-20 aspect-h-1 aspect-w-1 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
            >
              <AiOutlineClose
                className="hover:cursor-pointer w-6"
                onClick={() => handleDelete(modal)}
              />
              <Image
                width={1200}
                height={1200}
                src={
                  imageUploadService.getPreview(
                    modal.image || modal.$id || modal
                  ).href
                }
                alt="modal"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
              <h1 className="text-black overflow-auto">
                {
                  imageUploadService.getPreview(
                    modal.image || modal.$id || modal
                  ).href
                }
              </h1>
              <button
                className="bg-slate-600 rounded-lg text-white px-2"
                onClick={(event) =>
                  handleCopy(
                    event,
                    imageUploadService.getPreview(
                      modal.image || modal.$id || modal
                    ).href
                  )
                }
              >
                copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
