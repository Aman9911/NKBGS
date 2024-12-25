"use client";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader";
import galleryService from "@/appwrite/appwriteGallery";
import imageUploadService from "@/appwrite/imageUploadService";
import { useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [toggle, setToggle] = useState(false);
  const [fullData, setFullData] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFileChange = async (file) => {
    const image = file ? await imageUploadService.uploadFile(file) : null;
    if (image) {
      setPhotos([...photos, image?.$id]);
      toast.success("Image uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = (data) => {
    if (data) {
      galleryService.deletePhoto(data.$id);
      data.link.map((img) => imageUploadService.deleteFile(img));
      setFullData(fullData.filter((item) => item.$id !== data.$id));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  const onSubmit = async (data) => {
    if (data) {
      const fileUpload = await galleryService.createPhoto({
        title: data.title,
        link: photos,
      });
      reset();
      if (fileUpload) {
        setFullData([...fullData, fileUpload]);
        toast.success("Data uploaded successfully.", {
          position: "top-right",
        });
      }
    }
    setPhotos([]);
  };

  useEffect(() => {
    galleryService.getPhoto().then((data) => {
      if (data) {
        setFullData(data.documents);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loader />;
  }

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
            <div className="flex flex-row max-w-md mb-4">
              <Input
                id="title"
                label="Title"
                errors={errors}
                register={register}
                required
              />
            </div>
            <div className="flex flex-row gap-2">
              <ImageUpload onChange={handleFileChange} />
            </div>
          </div>
          <Button label="Submit" type="submit" className="mt-4" />
        </form>
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {fullData?.map((data, index) => (
                <div
                  key={data.$id || index}
                  className="group aspect-h-1 aspect-w-1 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                >
                  <AiOutlineClose
                    className="hover:cursor-pointer w-6"
                    onClick={() => handleDelete(data)}
                  />
                  <img
                    src={imageUploadService.getPreview(data.link[0])}
                    alt="modal"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                  <h1
                    className="text-black overflow-auto text-lg font-bold text-center cursor-pointer"
                    onClick={() =>
                      router.push(`/admin/dashboard/gallery/${data.$id}`)
                    }
                  >
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

export default Gallery;
