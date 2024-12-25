"use client";
import Link from "next/link";
import React, { memo, useState } from "react";
import CalendarModal from "./modals/CalendarModal";

const carouselItems = [
  {
    id: "ACADEMIC UPDATE",
    title: "ACADEMIC UPDATE",
    svg: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    subTitle: "Access syllabus and academic updates",
    link:"/academicUpdate",
  },
  {
    id: "TEACHER CARE & DEVELOPMENT",
    title: "TEACHER CARE & DEVELOPMENT",
    svg: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    subTitle: "Teacher care & Development",
    link:"/teacherCareAndDevelopment",
  },
  {
    id: "STUDENT ENRICHMENT PROGRAME",
    title: "STUDENT ENRICHMENT PROGRAME",
    svg: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    subTitle: "Student Enrichment Programe",
    link:"/studentEnrichmentPrograme",
  },
  {
    id: "ATL CORNER",
    title: "ATL CORNER",
    svg: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
    subTitle: "ITL ATL Corner and updates",
    link:"/atlCorner",
  },
  {
    id: "NATIONAL AND INTERNATIONAL DAYS",
    title: "NATIONAL AND INTERNATIONAL DAYS",
    svg: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    subTitle: "National and International Days",
    link:"nationalAndInternationalDays",
  },
  {
    id: "COMMUNITY OUTREACH PROGRAM",
    title: "Community Outreach Program",
    svg: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    subTitle: "National and International Days",
    link:"communityOutreachProgram",
  },
  {
    id: "E-Newsletter",
    title: "E-Newsletter",
    svg: "M 2 3 L 2 18 C 2 19.64497 3.3550302 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 7 L 20 7 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.43497 19 18 18.56503 18 18 L 18 3 L 2 3 z M 4 5 L 16 5 L 16 18 C 16 18.388348 16.278986 18.657986 16.416016 19 L 5 19 C 4.4349698 19 4 18.56503 4 18 L 4 5 z M 6 7 L 6 10 L 14 10 L 14 7 L 6 7 z M 6 12 L 6 14 L 14 14 L 14 12 L 6 12 z M 6 16 L 6 18 L 14 18 L 14 16 L 6 16 z",
    subTitle: "E-Newsletter",
    link:"eNewsLetter",
  },
  {
    id: "Calendar",
    title: "Calendar",
    svg: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z",
    subTitle: "Calendar",
    // link:"",
  },
  {
    id: "CAMPUS HAPPENING",
    title: "CAMPUS HAPPENING",
    svg: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    subTitle: "Check out various campus happenings",
    link:"campusHappening",
  },
];

const Carousel = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <CalendarModal toggle={toggle} setToggle={setToggle} />
      {carouselItems.map((item, index) => (
        <div
          className="flex flex-col justify-center h-[200px] w-[314px] md:w-[360px] items-center border border-md rounded-xl text-black md:ml-2 md:mt-2 backdrop-blur-3xl bg-yellow-100 backdrop-brightness-200 shadow-xl"
          key={item.id}
        >
          <h3 className="text-lg pb-4 md:text-xl text-center ">{item.title}</h3>
          <button className="pb-4 ">
            {item.link ? (
              <Link href={`${item.link}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-14 h-14 md:w-16 md:h-16 text-orange-500 hover:scale-125"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.svg}
                  />
                </svg>
              </Link>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-14 h-14 md:w-16 md:h-16 text-orange-500 hover:scale-125"
                onClick={handleClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.svg}
                />
              </svg>
            )}
          </button>
          <p className="text-xs pb-4 text-center md:text-sm">{item.subTitle}</p>
        </div>
      ))}
    </>
  );
};

export default memo(Carousel);
