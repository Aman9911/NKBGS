"use client";
import Button from "@/app/components/Button";
import ProudMomentCard from "@/app/components/client/ProudMomentCard";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import proudMomentsService from "@/appwrite/appwriteProudMoments";
import imageUploadService from "@/appwrite/imageUploadService";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProudMoments = () => {
  const [proud, setProud] = useState([]);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    proudMomentsService.getProudMoments().then((data) => {
      if (data) {
        setProud(data.documents.reverse());
      }
    });
  }, []);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    control,
  } = useForm();
  const onSubmit = async (data) => {
    if (data) {
      const image = await imageUploadService.uploadFile(data.image);
      if (image) {
        const response = await proudMomentsService.createProudMoments({
          ...data,
          image: image.$id,
        });
        if (response) {
          setProud((prev) => [...prev, data]);
        }
      }
      setToggle(false);
      reset();
      toast.success("Data uploaded successfully....", {
        position: "top-right",
      });
    }
  };
  const handleDelete = (data) => {
    if (data) {
      imageUploadService.deleteFile(data.image);
      proudMomentsService.deleteProudMoments(data.$id);
      setProud(proud.filter((pr) => pr.$id !== data.$id));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };
  return (
    <div>
      <div className="text-right">
        <Button
          label={toggle ? "Cancel" : "Add new"}
          small
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {toggle ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-[50%]"
        >
          <Input
            id="date"
            label="Date"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <Input
            id="hostSchool"
            label="Name of the host School/Organisation"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <Input
            id="eventName"
            label="Name of the Competition/Event"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <Input
            id="participants"
            label="Participants"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <p className="text-xs text-red-500 text-right">
            * Please use comma(,) to separat participants name
          </p>

          <Input
            id="prize"
            label="Result"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange } }) => (
              <ImageUpload onChange={onChange} />
            )}
          />
          <div className="flex justify-center gap-4">
            <Button
              label="Submit"
              type="submit"
              classname="mb-2 border-indigo-600"
              disabled={isSubmitting}
            />
            <Button
              label="Reset"
              type="reset"
              classname="mb-2 border-slate-700 bg-slate-700"
            />
          </div>
        </form>
      ) : (
        <ProudMomentCard proud={proud} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default ProudMoments;
