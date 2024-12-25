"use client";
import Button from "@/app/components/Button";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SelectBox from "./inputs/SelectBox";
import academicUpdateService from "@/appwrite/appwriteAcademicUpdate";
import pdfUploadService from "@/appwrite/pdfUploadService";

const AcademicUpdateForm = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [subject, setSubject] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const options = [
    { value: "", label: "Select an option" },
    { value: "I", label: "Class 1" },
    { value: "II", label: "Class 2" },
    { value: "III", label: "Class 3" },
    { value: "IV", label: "Class 4" },
    { value: "V", label: "Class 5" },
    { value: "VI", label: "Class 6" },
    { value: "VII", label: "Class 7" },
    { value: "VIII", label: "Class 8" },
    { value: "IX", label: "Class 9" },
    { value: "X", label: "Class 10" },
    { value: "XI", label: "Class 11" },
    { value: "XII", label: "Class 12" },
  ];

  const handleFileChange = async (file) => {
    setSubject((prev) => [
      ...prev,
      { subject: file.subject, link: file.subjectFile },
    ]);
    reset({ subject: "", subjectFile: "" });
  };

  const onSubmit = async (data) => {
    setIsDisabled(true);
    const sub = await Promise.all(
      subject.map(async (s) => {
        let fileId = await pdfUploadService.uploadFile(s.link);
        if (fileId) {
          const finalSub = await academicUpdateService.createSubject({
            subject: s.subject,
            link: fileId.$id,
          });
          return finalSub.$id;
        }
      })
    );
    if (sub) {
      const { subjectFile, ...result } = data;
      await academicUpdateService.createAcademicUpdate({
        ...result,
        subject: sub,
      });
      setToggle(false);
      toast.success("Data uploaded successfully", { position: "top-right" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <SelectBox
          required
          errors={errors}
          options={options}
          label={"Select Class"}
          id="class"
          register={register}
        />
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
            <Input
              id="subject"
              label="Subject"
              errors={errors}
              register={register}
            />
            <Controller
              name="subjectFile"
              control={control}
              render={({ field: { onChange } }) => (
                <ImageUpload onChange={onChange} />
              )}
            />
            <Button
              label="Add"
              type="button"
              onClick={handleSubmit(handleFileChange)}
              small
              classname={"h-10"}
            />
          </div>
          {subject?.map((data, index) => (
            <p className="inline" key={index}>
              {data.subject}
              {subject.length - 1 == index ? "" : ","}
            </p>
          ))}
        </div>
        <Button
          label="Submit"
          disabled={isDisabled}
          type="submit"
          className="mt-4"
        />
      </form>
    </>
  );
};

export default AcademicUpdateForm;
