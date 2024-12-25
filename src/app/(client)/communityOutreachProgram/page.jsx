"use client";
import Container from "@/app/components/client/Container";
import communityOutreachService from "@/appwrite/appwriteCommunityOutreach";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React, { useEffect, useState } from "react";

const CommunityOutreachProgram = () => {
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    try {
      communityOutreachService.getCommunityOutreach().then((data) => {
        if (data) {
          setDevelopment(data.documents.reverse());
        }
      });
    } catch (error) {
      console.error("Fail to get CommunityOutreach data : ", error);
      return error;
    }
  }, []);

  const handleFilePreview = async (id) => {
    try {
      const fileDownload = await pdfUploadService.getFileDownload(id);
      const blob = await fetch(fileDownload.href).then((res) => res.blob());
      const url = URL.createObjectURL(blob);
      if (url) {
        window.open(url);
      }
    } catch (error) {
      throw new Error("Sorry there is some issue in network", error);
    }
  };

  return (
    <Container>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/heroBanner/building.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 md:p-8 ">
          <div className="p-2 text-wrap bg-slate-100/50 rounded-md">
            <h1 className="text-3xl  text-center font-bold">
              Community Outreach Program
            </h1>

            <p className="mt-2 ">
              The Community Outreach Program organized by NKBGS exemplifies the
              institution&apos;s commitment to fostering social responsibility among
              its students. This initiative aims to bridge the gap between the
              school and the local community, encouraging students to engage
              with and support those in need. Through various activities such as
              workshops, health camps, and educational sessions, the program not
              only serves the community but also instills a sense of empathy and
              civic duty in the students.
            </p>
            <p className="mt-2 ">
              Students play an active role in the planning and execution of the
              outreach activities, allowing them to take ownership of their
              contributions. By collaborating with local organizations, they
              gain valuable insights into community issues and learn to develop
              solutions that can make a real difference. This hands-on
              experience enhances their leadership skills and promotes teamwork,
              as they work together to identify community needs and mobilize
              resources effectively.
            </p>
            <p className="my-2 ">
              The impact of the Community Outreach Program is profound, as it
              not only benefits the recipients but also enriches the students’
              educational journey. Through direct interaction with diverse
              populations, students gain a deeper understanding of social
              issues, cultivating compassion and a sense of global citizenship.
              The program not only shapes their character but also empowers them
              to become proactive and informed members of society, equipped to
              contribute positively to their communities in the future.
            </p>

            <div className="md:ml-2">
              {development.map((data, index) => (
                <div key={data.$id} className="table-row">
                  <p className="table-cell md:px-1">{index + 1}.</p>
                  <p className="table-cell md:px-1">
                    {data.date.split("T")[0].split("-").reverse().join("-")}
                  </p>
                  <p
                    className="table-cell md:px-1 text-blue-600 cursor-pointer"
                    onClick={() => handleFilePreview(data.link)}
                  >
                    {data.name.split(".")[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CommunityOutreachProgram;
