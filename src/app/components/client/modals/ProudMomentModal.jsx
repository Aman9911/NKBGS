"use client";
import { memo } from "react";
import Modal from "./Modal";
import imageUploadService from "@/appwrite/imageUploadService";
import ImageSlider from "@/app/components/client/ImageSlider";

const ProudMomentModal = ({ toggle, setToggle, clickData }) => {
  const onClose = () => {
    setToggle(false);
  };

  const bodyContent = (
    <ImageSlider
      images={clickData?.map((img) => imageUploadService.getPreview(img).href)}
      isAutoplayEnabled={false}
    />
  );

  return (
    <Modal
      disabled={false}
      isOpen={toggle}
      onClose={onClose}
      body={bodyContent}
      classname="md:w-[60%]"
    />
  );
};

export default memo(ProudMomentModal);
