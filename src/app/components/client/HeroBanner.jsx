"use client";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import heroBannerService from "@/appwrite/appwriteHeroBanner";
import imageUploadService from "@/appwrite/imageUploadService";
import Link from "next/link";

const HeroBanner = () => {
  const [heroBanner, setHeroBanner] = useState([]);

  useEffect(() => {
    heroBannerService.getHeroBanner().then((hero) => {
      if (hero) {
        setHeroBanner(
          hero.documents.map(
            (img) => imageUploadService.getPreview(img.image).href
          )
        );
      }
    });
  }, [setHeroBanner]);

  return (
    <>
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
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper md:w-screen md:h-screen h-[400px] "
      >
        {heroBanner?.map((image, index) => (
          <SwiperSlide key={index * 22}>
            <Image
              alt="Building"
              src={image}
              width={100}
              height={100}
              loading="eager"
              sizes="100vw"
              className="rounded-b-lg object-cover w-[100%] h-[100%]"
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="fixed group right-0 md:top-28 top-16 z-10 flex items-center">
        <Link
          href="https://momento360.com/e/uc/b4b40370ae534336a5ab12c681f858eb?utm_campaign=embed&utm_source=other&size=medium&display-plan=true"
          className="flex items-center"
          target="_blank"
        >
          <div className="text-xs sm:text-sm md:text-base hidden opacity-0 group-hover:inline group-hover:opacity-100 group-hover:bg-[#d3f3fc] text-[#008eff] p-2 rounded-lg transition-opacity duration-500 ease-in-out mr-2">
            360 View
          </div>
          <img
            src="/images/360degree.gif"
            alt="360 Degree"
            className="cursor-pointer bg-white rounded-full hover:bg-white md:w-[70px] sm:w-[50px] w-[30px]"
          />
        </Link>
      </div>
      <div className="fixed group right-0 sm:top-32 md:top-48 top-24 z-10 flex items-center">
        <Link
          href="https://nkbglobal.entab.info"
          className="flex items-center"
          target="_blank"
        >
          <div className="text-xs sm:text-sm md:text-base hidden opacity-0 group-hover:inline group-hover:opacity-100 group-hover:bg-[#d3f3fc] text-[#008eff] p-2 rounded-lg transition-opacity duration-500 ease-in-out mr-2">
            ERP Loing
          </div>
          <img
            src="/images/login.gif"
            alt="360 Degree"
            className="cursor-pointer items-center bg-white rounded-full hover:bg-white md:w-[70px] sm:w-[50px] w-[30px]"
          />
        </Link>
      </div>
    </>
  );
};

export default memo(HeroBanner);
