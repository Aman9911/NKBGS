"use client";
import Container from "@/app/components/client/Container";
import Loader from "@/app/components/Loader";
import campusHappeningService from "@/appwrite/appwriteCampusHappening";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CampusHappening = () => {
  const [development, setDevelopment] = useState([]);
  const [loading,setLoading]=useState(true)
  useEffect(() => {
    try {
      campusHappeningService.getCampusHappening().then((data) => {
        if (data) {
          setDevelopment(data.documents.reverse());
          setLoading(false)
        }
      });
    } catch (error) {
      console.error("Fail to fetch the Campus Happening data : ",error);
      return error;
    }
  }, []);

  if(loading){
    return <Loader/>
  }

  return (
    <Container>
      <div className="max-w-screen mx-auto p-5 sm:p-10 ">
        {development.map((data) => (
          <div
            className="mb-10 rounded overflow-hidden flex flex-col mx-auto"
            key={data.$id}
          >
            <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              {data.title}
            </h1>
            <div className="flex  justify-center ">
              <Image
                        width={1200}
                        height={1200}
                className="md:w-3/4 aspect-video rounded-lg"
                src={imageUploadService.getPreview(data.thumbnail).href}
                alt="Sunset in the mountains"
              />
            </div>
            <p
              className="text-gray-700 py-5 text-base leading-8"
              dangerouslySetInnerHTML={{ __html: data.editorContent }}
            ></p>
            <hr className=" border-gray-500" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CampusHappening;
