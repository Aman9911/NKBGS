"use client";
import { memo, useEffect, useState } from "react";
import Modal from "./Modal";
import imageUploadService from "@/appwrite/imageUploadService";
import ImageSlider from "@/app/components/client/ImageSlider";
import calendarService from "@/appwrite/appwriteCalendar";

const CalendarModal = ({ toggle, setToggle }) => {
  const [modals, setModals] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    calendarService.getCalendar().then((modal) => {
      if (modal) {
        const currentMonthIndex = new Date().getMonth();
        const currentMonthName = monthNames[currentMonthIndex];
        const currentMonthDataIndex = modal.documents.findIndex(
          (item) => item.name === currentMonthName
        );
        const reorderedData = [
          ...modal.documents.slice(currentMonthDataIndex),
          ...modal.documents.slice(0, currentMonthDataIndex),
        ];

        setModals(
          reorderedData.map(
            (img) => imageUploadService.getPreview(img.link).href
          )
        );
      }
    });
  }, [setModals,monthNames]);

  const onClose = () => {
    setToggle(false);
  };

  const bodyContent = <ImageSlider images={modals} isAutoplayEnabled={false} />;

  return (
    <Modal
      disabled={false}
      isOpen={toggle}
      onClose={onClose}
      body={bodyContent}
      classname="md:w-[80%]"
    />
  );
};

export default memo(CalendarModal);
