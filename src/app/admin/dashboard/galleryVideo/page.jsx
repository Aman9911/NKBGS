"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import { AiOutlineClose } from "react-icons/ai";
import galleryVideoService from "@/appwrite/appwriteGalleryVideo";

const GalleryVideo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [toggle, setToggle] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleDelete = (data) => {
    if (data) {
      galleryVideoService.deleteVideo(data.$id);
      setVideos(videos.filter((item) => item.$id !== data.$id));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  const onSubmit = async (data) => {
    if (data) {
      const urlObj = new URL(data.videoLink);
      if (urlObj.hostname.includes("youtube.com")) {
        data.videoLink = urlObj.searchParams.get("v");
      }
      if (urlObj.hostname === "youtu.be") {
        data.videoLink = urlObj.pathname.slice(1);
      }
      const fileUpload = await galleryVideoService.createVideo(data);
      if (fileUpload) {
        setVideos([fileUpload, ...videos]);
        toast.success("Data uploaded successfully.", {
          position: "top-right",
        });
      }
      reset();
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    galleryVideoService.getVideo().then((data) => {
      if (data) {
        setVideos(data.documents.reverse());
      }
    });
  }, []);

  return (
    <>
      <div className="text-right">
        <Button
          label={toggle ? "Cancel" : "Add new"}
          small
          classname={"w-1/6"}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {toggle ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <div className="flex flex-col gap-5 max-w-md mb-4">
              <Input
                id="title"
                label="Title"
                errors={errors}
                register={register}
                required
              />
              <Input
                id="videoLink"
                label="Video Link"
                errors={errors}
                register={register}
                required
              />
            </div>
          </div>
          <Button label="Submit" type="submit" className="mt-4" />
        </form>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
              {videos.map((data, index) => (
                <div
                  key={data.$id || index}
                  className="group aspect-h-9 aspect-video aspect-w-16 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                >
                  <AiOutlineClose
                    className="hover:cursor-pointer w-6"
                    onClick={() => handleDelete(data)}
                  />
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${data.videoLink}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <h1 className="text-black overflow-auto text-lg font-bold text-center cursor-pointer">
                    {data.title}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryVideo;
