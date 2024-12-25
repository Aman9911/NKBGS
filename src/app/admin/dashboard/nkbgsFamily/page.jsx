"use client";
import Button from "@/app/components/Button";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import SelectBox from "@/app/components/inputs/SelectBox";
import nkbgsFamilyService from "@/appwrite/appwriteNkbgsFamily";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";

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

const NkbgsFamilyPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [isDisabled, setIsDisabled] = useState(false);
  const [family, setFamily] = useState([]);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    nkbgsFamilyService.getNkbgsFamily().then((data) => {
      if (data) {
        setFamily(data.documents);
      }
    });
  }, []);

  const onSubmit = async (data) => {
    setIsDisabled(true);
    const file = data.file
      ? await imageUploadService.uploadFile(data.file)
      : null;
    if (file) {
      await nkbgsFamilyService.createNkbgsFamily({ ...data, file: file?.$id });
      toast.success("Data uploaded successfully", { position: "top-right" });
      setToggle(!toggle);
      setIsDisabled(false);
    }
  };

  const handleOnDelete = (data) => {
    if (data) {
      imageUploadService.deleteFile(data.file);
      nkbgsFamilyService.deleteNkbgsFamily(data.$id);
      setFamily(family.filter((e) => e !== data));
      setToggle(false);
      toast.success("Data deleted successfully", { position: "top-right" });
    }
  };

  return (
    <>
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
        <div className="pt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
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
            </div>
            <Button
              label="Submit"
              type="submit"
              className="mt-4"
              disabled={isDisabled}
            />
          </form>
        </div>
      ) : (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {family?.map((data) => (
            <div className="col-span-1 group" key={data.$id}>
              <div className="flex flex-col gap-2 w-full">
                <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
                  <Image
                    width={1200}
                    height={1200}
                    src={imageUploadService.getPreview(data.file).href}
                    alt="list"
                    className="object-cover h-full w-full "
                  />
                  <div className="absolute cursor-pointer top-1 right-1 text-zinc-800 hover:text-zinc-950">
                    <MdCancel size={20} onClick={() => handleOnDelete(data)} />
                  </div>
                </div>
                <div
                  className="font-semibold text-lg cursor-pointer"
                  onClick={() =>
                    router.push(`/admin/dashboard/nkbgsFamily/${data.$id}`)
                  }
                >
                  {data.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NkbgsFamilyPage;
