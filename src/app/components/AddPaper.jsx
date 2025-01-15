"use client";
import Button from "@/app/components/Button";
import React, { useState } from "react";
import Input from "@/app/components/inputs/Input";
import { useForm } from "react-hook-form";
import Container from "@/app/components/Container";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import pdfUploadService from "@/appwrite/pdfUploadService";
import previousYearPaperService from "@/appwrite/appwritePreviousYearPaper";
import toast from "react-hot-toast";

const AddPaper = ({ setPreviousPaper, previousPaper }) => {
  const [paper, setPaper] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsDisabled(true);
    if (data) {
      const fileData = paper ? await pdfUploadService.uploadFile(paper) : null;
      if (fileData) {
        const newData = await previousYearPaperService.createPreviousYearPaper({
          ...data,
          class: data.class.toUpperCase(),
          fileData: fileData.$id,
        });
        reset();
        toast.success("Paper uploaded successfully.", {
          position: "top-right",
        });
        setPreviousPaper([...previousPaper, newData]);
      }
    }
    setIsDisabled(false);
  };

  const handleFileChange = (file) => {
    setPaper(file);
  };

  return (
    <Container>
      <div className="w-1/2">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="class"
            label="Class"
            disabled={false}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="subject"
            label="Subject"
            disabled={false}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="examType"
            label="Exam"
            disabled={false}
            register={register}
            errors={errors}
            required
          />
          <Input
            id="session"
            label="Session"
            disabled={false}
            register={register}
            errors={errors}
            required
          />
          <ImageUpload onChange={handleFileChange} />
          <Button label="Submit" type="submit" disabled={isDisabled} />
        </form>
      </div>
    </Container>
  );
};

export default AddPaper;
