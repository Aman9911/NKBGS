"use client";
import React, { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Card from "@/app/components/Card";
import toast from "react-hot-toast";
import imageUploadService from "@/appwrite/imageUploadService";

const Modal = () => {
  const [modals, setModals] = useState([]);

  const handleFileChange = async (file) => {
    const image = file ? await imageUploadService.uploadFile(file) : null;
    if (image) {
      const data = await appwriteService.createModal(image.$id);
      setModals([...modals, data]);
      toast.success("Image uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = (modal) => {
    if (modal) {
      appwriteService.deleteModal(modal.$id);
      imageUploadService.deleteFile(modal.image)
      setModals(modals.filter((mod) => mod !== modal));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  useEffect(() => {
    appwriteService.getModal().then((modal) => {
      if (modal) {
        setModals(modal.documents);
      }
    });
  }, []);

  return (
    <>
      <ImageUpload onChange={handleFileChange} />
      <Card modals={modals} handleDelete={handleDelete} />
    </>
  );
};

export default Modal;
