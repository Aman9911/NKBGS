"use client";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import pdfUploadService from "@/appwrite/pdfUploadService";
import toast from "react-hot-toast";
import valueEducationService from "@/appwrite/appwriteValueEducation";
import Card from "@/app/components/card/Card";

const ValueEducation = () => {
  const [development, setDevelopment] = useState([]);

  useEffect(() => {
    valueEducationService.getValueEducation().then((data) => {
      if (data) {
        setDevelopment(data.documents);
      }
    });
  }, []);

  const handleFileChange = async (file) => {
    const image = file ? await pdfUploadService.uploadFile(file) : null;
    if (image) {
      const data = await valueEducationService.createValueEducation({
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
      valueEducationService.deleteValueEducation(data.$id);
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

export default ValueEducation;
