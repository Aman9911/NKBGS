"use client";
import React, { useEffect, useState } from "react";
import nkbgsFamilyService from "@/appwrite/appwriteNkbgsFamily";
import imageUploadService from "@/appwrite/imageUploadService";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import { Controller, useForm } from "react-hook-form";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Card from "@/app/components/Card";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SelectBox from "@/app/components/inputs/SelectBox";

const departmentPriority = [
  { value: "", label: "Select an option" },
  { value: "Management", label: "Management" },
  { value: "English", label: "English" },
  { value: "Science", label: "Science" },
  { value: "Mathematics", label: "Mathematics" },
  { value: "Commerce", label: "Commerce" },
  { value: "Economics", label: "Economics" },
  { value: "Social Studies", label: "Social Studies" },
  { value: "IT", label: "IT" },
  { value: "Psychology", label: "Psychology" },
  { value: "Physical Education", label: "Physical Education" },
  { value: "Hindi & Sanskrit", label: "Hindi & Sanskrit" },
  { value: "French & German", label: "French & German" },
  { value: "Library", label: "Library" },
  { value: "Fine Arts", label: "Fine Arts" },
  { value: "Music", label: "Music" },
  { value: "Dance", label: "Dance" },
  { value: "Sports", label: "Sports" },
  { value: "Yoga", label: "Yoga" },
  { value: "Primary Wing", label: "Primary Wing" },
  { value: "Pre Primary Wing", label: "Pre Primary Wing" },
];

const NkbgsFamilyId = ({ params }) => {
  const id = params.nkbgsFamilyId;
  const [thumbnailToggle, setThumbnailToggle] = useState(false);
  const [image, setImage] = useState([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    nkbgsFamilyService.getNkbgsFamilyById(id).then((data) => {
      if (data) {
        setImage([data.file]);
        setValue("name", data.name);
        setValue("designation", data.designation);
        setValue("qualification", data.qualification);
        setValue("department", data.department);
        setThumbnailToggle(true);
      }
    });
  }, [setValue,id]);

  const onSubmit = async (data) => {
    const file =
      data.file instanceof File
        ? await imageUploadService.uploadFile(data.file)
        : image;
    if (file) {
      await nkbgsFamilyService.updateNkbgsFamily(id, {
        ...data,
        file: file.$id,
      });
      toast.success("Data uploaded successfully", { position: "top-right" });
      router.push("/admin/dashboard/nkbgsFamily");
    }
  };

  const handleImageDelete = () => {
    imageUploadService.deleteFile(image);
    setImage([]);
    toast.success("Image deleted successfully", { position: "top-right" });
  };

  return (
    <div className="pt-12">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          id="name"
          label="Name"
          errors={errors}
          register={register}
          required
          classname={"flex flex-col gap-8 mb-4 px-4"}
        />
        <Input
          id="designation"
          label="Designation"
          errors={errors}
          register={register}
          required
          classname={"flex flex-col gap-8 mb-4 px-4"}
        />
        <Input
          id="qualification"
          label="Qualification"
          errors={errors}
          register={register}
          required
          classname={"flex flex-col gap-8 mb-4 px-4"}
        />
        <SelectBox
              required
              errors={errors}
              options={departmentPriority}
              label={"Select Department"}
              id="department"
              register={register}
            />
        {/* <Input
          id="department"
          label="Department"
          errors={errors}
          register={register}
          required
          classname={"flex flex-col gap-8 mb-4 px-4"}
        /> */}
        <div className="mb-4">
          <label className="font-bold text-gray-800 text-2xl">Image </label>
          <Controller
            name="file"
            control={control}
            render={({ field: { onChange } }) => (
              <ImageUpload onChange={onChange} />
            )}
          />
          {thumbnailToggle && (
            <Card modals={image} handleDelete={handleImageDelete} />
          )}
        </div>
        <Button label="Submit" type="submit" className="mt-4" />
      </form>
    </div>
  );
};

export default NkbgsFamilyId;
