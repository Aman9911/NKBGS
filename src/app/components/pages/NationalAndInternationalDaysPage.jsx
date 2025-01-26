"use client";
import Container from "@/app/components/client/Container";
import nationalAndInternationalService from "@/appwrite/appwriteNationalAndInternational";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import { useEffect, useState } from "react";

const NationalAndInternationalDaysPage = () => {
  const [development, setDevelopment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      nationalAndInternationalService
        .getNationalAndInternational()
        .then((data) => {
          if (data) {
            setDevelopment(data.documents.reverse());
            setLoading(false);
          }
        });
    } catch (error) {
      console.error("Fail to get National and International Data", error);
      return error;
    }
  }, []);

  return (
    <Container>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center md:text-2xl pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            National And International Days
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  className="rounded  overflow-hidden shadow-lg flex flex-col animate-pulse"
                  key={index}
                >
                  <div className="relative">
                    <div className="w-96 h-80" />
                    <div className="transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <h1 className="font-medium text-lg bg-gray-400 w-full rounded-sm h-5 text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"></h1>
                    <p className="text-gray-600 bg-gray-400 text-sm w-full rounded-sm h-5"></p>
                  </div>
                </div>
              ))
            : development?.map((data) => (
                <div
                  className="rounded overflow-hidden shadow-lg flex flex-col"
                  key={data.$id}
                >
                  <div className="relative">
                    <Image
                      width={1200}
                      height={1200}
                      className="w-full"
                      src={imageUploadService.getPreview(data.thumbnail).href}
                      alt="Sunset in the mountains"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <h1 className="font-medium text-lg text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                      {data.title}
                    </h1>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: data.editorContent }}
                    ></p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Container>
  );
};

export default NationalAndInternationalDaysPage;
