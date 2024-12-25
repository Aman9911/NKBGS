"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/client/Container";
import eventsService from "@/appwrite/appwriteEvents";
import pdfUploadService from "@/appwrite/pdfUploadService";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    eventsService.getEvents().then((event) => {
      if (event) {
        setEvents(event.documents);
        setLoading(false);
      }
    });
  }, []);

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
    <Container>
      <div className="text-center shadow-2xl rounded-xl border-white border-2 m-4 p-4 w-[80%] bg-teal-400/40">
        <div className="text-xl md:text-3xl font-bold py-2 ">
          News & Upcoming Events
        </div>
        <div className="text-center mt-2">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  className=" shadow-2xl rounded-xl flex justify-start bg-gray-400 mb-4 animate-pulse"
                  key={index}
                >
                  <h4 className="text-sm  text-center px-4 py-2 m-1 rounded-xl leading-3 md:font-semibold md:text-base md:p-[2%] "></h4>
                  <p className="text-left w-full text-xs pt-2 px-1 md:p-[2%] md:text-base text-white "></p>
                  <div className="h-10 cursor-pointer mt-2 md:ml-8 md:mt-4 hover:-translate-y-1 md:transition md:ease-in-out" />
                </div>
              ))
            : events.map((event) => (
                <div
                  className=" shadow-2xl rounded-xl flex justify-start bg-indigo-600 mb-4 "
                  key={event.$id}
                >
                  <h4 className="text-sm bg-slate-200 text-center px-4 py-2 m-1 rounded-xl leading-3 md:font-semibold md:text-base md:p-[2%] ">
                    {event.date}
                  </h4>
                  <p className="text-left text-xs pt-2 px-1 md:p-[2%] md:text-base text-white ">
                    {event.title}
                  </p>
                  <img
                    src="/images/PDF.png"
                    alt="list"
                    onClick={() => handleFilePreview(event.file)}
                    className="h-10 cursor-pointer mt-2 md:ml-8 md:mt-4 hover:-translate-y-1 md:transition md:ease-in-out"
                  />
                </div>
              ))}
        </div>
      </div>
    </Container>
  );
};

export default Events;
