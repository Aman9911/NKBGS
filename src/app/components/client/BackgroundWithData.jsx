"use client";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React from "react";

const BackgroundWithData = ({
  heading,
  para1,
  para2,
  para3,
  para4,
  development,
}) => {
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
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/heroBanner/building.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 md:p-8 text-gray-950">
        <div className="p-2 text-wrap bg-slate-100/50 rounded-md">
          <h1 className="text-3xl text-center font-bold text-indigo-600">
            {heading}
          </h1>
          <div className="mt-2 ">{para1}</div>
          {para2 && <div className="mt-2 ">{para2}</div>}
          {para3 && <div className="mt-2 ">{para3}</div>}
          {para4 && <div className="mt-2 ">{para4}</div>}
          {development.length !== 0 && (
            <div className="md:ml-2 mt-2">
              {development?.map((data, index) => (
                <div key={data.$id} className="table-row">
                  <p className="table-cell md:px-1">{index + 1}.</p>
                  <p className="table-cell md:px-1">
                    {data.date.split("T")[0].split("-").reverse().join("-")}
                  </p>
                  <p
                    className="table-cell md:px-1 text-blue-600 cursor-pointer"
                    onClick={() => handleFilePreview(data.link)}
                  >
                    {data.name.split(".")[0]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackgroundWithData;
