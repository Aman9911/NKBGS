import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const ImageSlider = ({ images, isAutoplayEnabled = true }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        slidesPerGroup={1}
        slidesPerView={1}
        autoplay={
          isAutoplayEnabled
            ? {
                delay: 6000,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper relative  w-full h-screen"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index * 2}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="absolute p-2 h-full border  border-gray-300 rounded-lg shadow-md object-contain w-full"
              width={1000}
              height={1000}
              quality={100}
              priority={true}
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default memo(ImageSlider);
