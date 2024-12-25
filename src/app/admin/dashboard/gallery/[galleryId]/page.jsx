"use client";
import Button from "@/app/components/Button";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import galleryService from "@/appwrite/appwriteGallery";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const GalleryId = ({ params }) => {
  const [infrastructure, setInfrastructure] = useState(null);
  const [photos, setPhotos] = useState([]);
  const id = params.galleryId;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    galleryService.getPhotoById(id).then((infraData) => {
      if (infraData) {
        setInfrastructure(infraData);
        setValue("title", infraData.title);
      }
    });
  }, [id]);

  const handleFileChange = async (file) => {
    if (file) {
      setPhotos([...photos, file]);
      toast.success("Image uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = async (data) => {
    let updatedLinks = infrastructure.link.filter((link) => link !== data);
    if (data) {
      setInfrastructure((prevData) => {
        return {
          ...prevData,
          link: updatedLinks,
        };
      });
      await galleryService.updatePhoto(id, {
        link: updatedLinks,
        title: infrastructure.title,
      });
      imageUploadService.deleteFile(data);
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  const onSubmit = async (data) => {
    let images;
    if (photos.length !== 0) {
      images = await Promise.all(
        photos.map(async (pic) => {
          let picId = await imageUploadService.uploadFile(pic);
          return picId.$id;
        })
      );
      setInfrastructure((prevData) => {
        return {
          ...prevData,
          title: data.title,
          link: [...prevData.link, ...images],
        };
      });
      await galleryService.updatePhoto(id, {
        link: [...infrastructure.link, ...images],
        title: data.title,
      });
    } else {
      setInfrastructure((prevData) => {
        return {
          ...prevData,
          title: data.title,
        };
      });
      await galleryService.updatePhoto(id, { title: data.title });
    }
    setPhotos([]);
    toast.success("Data updated successfully", { position: "top-right" });
    router.push("/admin/dashboard/gallery");
  };

  return (
    <>
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
        <div className="flex gap-2">
          <Button label="Submit" type="submit" />
          <div
            onClick={() => router.push("/admin/dashboard/gallery")}
            className="cursor-pointer flex items-center text-center text-white py-3 font-semibold border-2 justify-center shadow-md active:border-b-0 active:translate-y-1 rounded-lg hover:opacity-80 transition w-1/4 bg-gray-400 border-gray-400"
          >
            Cancel
          </div>
        </div>
      </form>
      {/* Card   */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {infrastructure?.link.map((data, index) => (
              <div
                key={data.$id || index}
                className="group aspect-h-1 aspect-w-1 w-full rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
              >
                <AiOutlineClose
                  className="hover:cursor-pointer w-6"
                  onClick={() => handleDelete(data)}
                />
                <Image
                  width={1200}
                  height={1200}
                  src={imageUploadService.getPreview(data).href}
                  alt="modal"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryId;
