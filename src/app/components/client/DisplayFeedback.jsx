"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FeedbackCard from "./FeedbackCard";
import { memo } from "react";

const data = [
  {
    name: "Aman Singh",
    clas: "XII-B",
    img: "/images/feedback/feed1.png",
    feedback:
      "thank you for your continuous dedication and effort in providing quality education and fostering a supportive environment for all students to thrive!",
  },
  {
    name: "Sandeep Gagan",
    clas: "XII-A",
    img: "/images/feedback/feed2.png",
    feedback:
      "I truly appreciate the dedication of the teachers. Thank you for creating an inspiring and supportive learning environment!",
  },
  {
    name: "Himanshu gupta",
    clas: "XII-C",
    img: "/images/feedback/feed3.png",
    feedback:
      "I truly appreciate the dedication and hard work of the teachers and staff. Thank you for providing a positive and supportive learning environment!",
  },
  {
    name: "Rahul gupta",
    clas: "XII-C",
    img: "/images/feedback/feed3.png",
    feedback:
      "I truly appreciate the dedication and hard work of the teachers and staff. Thank you for providing a positive and supportive learning environment!",
  },
];

const DisplayFeedback = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper w-screen"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.name}>
            <FeedbackCard              
              name={item.name}
              clas={item.clas}
              img={item.img}
              feedback={item.feedback}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default memo(DisplayFeedback);
