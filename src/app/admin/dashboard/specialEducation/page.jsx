"use client";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import pdfUploadService from "@/appwrite/pdfUploadService";
import toast from "react-hot-toast";
import Card from "@/app/components/card/Card";
import specialEducationService from "@/appwrite/appwriteSpecial Education";

const SpecialEducation = () => {
  const [development, setDevelopment] = useState([]);

  useEffect(() => {
    specialEducationService.getSpecialEducation().then((data) => {
      if (data) {
        setDevelopment(data.documents);
      }
    });
  }, []);

  const handleFileChange = async (file) => {
    const image = file ? await pdfUploadService.uploadFile(file) : null;
    if (image) {
      const data = await specialEducationService.createSpecialEducation({
        name: image.name,
        link: image.$id,
        date: image.$createdAt.toLocaleString(),
      });
      setDevelopment([...development, data]);
      toast.success("Image uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = (data) => {
    if (data) {
      specialEducationService.deleteSpecialEducation(data.$id);
      pdfUploadService.deleteFile(data.link);
      setDevelopment(development.filter((mod) => mod !== data));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };
  return (
    <>
      <ImageUpload onChange={handleFileChange} />
      <Card development={development} handleDelete={handleDelete} />
    </>
  );
};

export default SpecialEducation;
