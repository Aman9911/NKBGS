import Container from "@/app/components/client/Container";
import Image from "next/image";
import React from "react";
import feedback1 from "../../../../public/feedback/feedback1.jpg";
import feedback2 from "../../../../public/feedback/feedback2.jpg";

const PFData = [
  {
    title: "Words of Appreciation by Parents",
    link: "",
    photo: feedback1,
  },
  {
    title: "Assembly: Basant Panchami",
    link: "r4C7RAZ9X_8",
    photo: feedback2,
  },
];

const ParentsFeedback = () => {
  return (
    <Container>
      <div className="max-w-screen mx-auto p-5 sm:p-10">
        {PFData.map((data) => (
          <div
            className="mb-10 rounded overflow-hidden flex flex-col mx-auto"
            key={data.title}
          >
            <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              {data.title}
            </h1>
            <div className=" flex flex-col gap-4 justify-center md:items-center">
              {data.photo && (
                <Image
                  width={1200}
                  height={1200}
                  className="md:w-1/4 rounded-lg"
                  src={data.photo}
                  alt="Sunset in the mountains"
                />
              )}
              {data.link && (
                <iframe
                  src={`https://www.youtube.com/embed/${data.link}`}
                  alt="infra"
                  className="md:w-2/4 aspect-video rounded-lg"
                ></iframe>
              )}
            </div>
            <hr className="mt-10 border-gray-500" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ParentsFeedback;
