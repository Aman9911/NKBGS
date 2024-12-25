"use client";
import { memo, useEffect, useState } from "react";
import Modal from "./Modal";
import appwriteService from "@/appwrite/config";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import Loader from "../../Loader";
import { useDispatch, useSelector } from "react-redux";
import { getModalToggle } from "@/store/homePageModalSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const HomePageModal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const toggle = useSelector((state) => state.modalToggle.toggle);
  const dispatch = useDispatch();
  const [modals, setModals] = useState([]);

  useEffect(() => {
    appwriteService.getModal().then((modal) => {
      if (modal) {
        setModals(
          modal.documents.map(
            (img) => imageUploadService.getPreview(img.image).href
          )
        );
      }
      setIsLoading(false);
    });
  }, [setModals]);

  const onClose = () => {
    dispatch(getModalToggle(false));
  };

  const bodyContent = (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      slidesPerGroup={1}
      slidesPerView={1}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {modals?.map((image, index) => (
        <SwiperSlide key={index * 2}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="border border-gray-300 rounded-lg shadow-md object-cover"
            width={1000}
            height={1000}
            quality={100}
            priority={true}
            sizes="100vw"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Modal
      disabled={false}
      isOpen={toggle}
      onClose={onClose}
      body={bodyContent}
    />
  );
};

export default memo(HomePageModal);
