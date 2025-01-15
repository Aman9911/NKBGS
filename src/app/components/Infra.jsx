"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/app/components/Editor"), { ssr: false });
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import imageUploadService from "@/appwrite/imageUploadService";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Infra = ({ infrastructure, onSubmit, isDisabled }) => {
  const id = infrastructure?.$id;
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [toggle, setToggle] = useState(false);
  const [thumbnailToggle, setThumbnailToggle] = useState(false);
  const [modals, setModals] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  const [editorContent, setEditorContent] = useState(null);

  useEffect(() => {
    if (infrastructure) {
      setValue("title", infrastructure.title);
      setValue("thumbnail", infrastructure.thumbnail);
      setThumbnails([infrastructure.thumbnail]);
      setThumbnailToggle(true);
      setValue("editorContent", infrastructure.editorContent);
      setEditorContent(infrastructure.editorContent);
    }
  }, [infrastructure,setValue]);

  const handleFileChange = async (file) => {
    const image = file ? await imageUploadService.uploadFile(file) : null;
    if (image) {
      setModals([...modals, image]);
      setToggle(true);
      toast.success("Image uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = (modal) => {
    if (modal) {
      imageUploadService.deleteFile(modal.image);
      setModals(modals.filter((mod) => mod !== modal));
      setToggle(false);
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  const handleThumbnailDelete = (modal) => {
    if (modal) {
      imageUploadService.deleteFile(modal.image || modal);
      setThumbnails(thumbnails.filter((mod) => mod != modal));
      setThumbnailToggle(false);
      toast.success("Thumbnail deleted successfully", {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2">
        <Input
          id="title"
          label="Title"
          errors={errors}
          register={register}
          required
          classname={"flex flex-col gap-8 mb-4 px-4"}
        />
        <div className="mb-4">
          <label className="font-bold text-gray-800 text-2xl">Thumbnail </label>
          <Controller
            name="thumbnail"
            control={control}
            defaultValue={thumbnails}
            render={({ field: { onChange } }) => (
              <ImageUpload
                onChange={onChange}
                value={infrastructure?.thumbnail}
              />
            )}
          />
          {thumbnailToggle && (
            <Card modals={thumbnails} handleDelete={handleThumbnailDelete} />
          )}
        </div>

        <ImageUpload onChange={handleFileChange} />
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
          (image only for upload in editor)
        </p>
        {toggle && <Card modals={modals} handleDelete={handleDelete} />}

        <Controller
          name="editorContent"
          control={control}
          defaultValue={editorContent}
          render={({ field: { onChange } }) => (
            <Editor
              placeholder=""
              onChange={onChange}
              content={editorContent}
            />
          )}
        />
        <Button
          type="submit"
          disabled={isDisabled}
          label="Submit"
          className="mt-4"
        />
      </form>
    </>
  );
};

export default Infra;
