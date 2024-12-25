"use client";
import React, { useEffect, useState } from "react";
import heroBannerService from "@/appwrite/appwriteHeroBanner";
import imageUploadService from "@/appwrite/imageUploadService";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Card from "@/app/components/Card";
import toast from "react-hot-toast";

const HeroBannerPage = () => {
  const [modals, setModals] = useState([]);

  const handleFileChange = async (file) => {
    const image = file ? await imageUploadService.uploadFile(file) : null;
    if (image) {
      const data = await heroBannerService.createHeroBanner(image.$id);
      setModals([...modals, data]);
      toast.success("Image uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = (modal) => {
    if (modal) {
      heroBannerService.deleteHeroBanner(modal.$id);
      imageUploadService.deleteFile(modal.image);
      setModals(modals.filter((mod) => mod !== modal));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  useEffect(() => {
    heroBannerService.getHeroBanner().then((modal) => {
      if (modal) {
        setModals(modal.documents);
      }
    });
  }, [setModals]);

  return (
    <>
      <ImageUpload onChange={handleFileChange} />
      <Card modals={modals} handleDelete={handleDelete} />
    </>
  );
};

export default HeroBannerPage;
