"use client";
import Container from "@/app/components/client/Container";
import studentEnrichmentService from "@/appwrite/appwriteStudentEnrichment";
import pdfUploadService from "@/appwrite/pdfUploadService";

import React, { useEffect, useState } from "react";

const StudentEnrichmentPrograme = () => {
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    try {
      studentEnrichmentService.getStudentEnrichment().then((data) => {
        if (data) {
          setDevelopment(data.documents.reverse());
        }
      });
    } catch (error) {
      console.error("Fail to get Student Enrichment", error);
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
              Student Enrichment Programe
            </h1>
            <p className="mt-2 ">
              The Student Enrichment Programme at NKBGS School is a dynamic
              initiative aimed at cultivating well-rounded individuals. This
              comprehensive programme features a variety of activities, such as
              skill-building workshops, cultural festivals, and inter-school
              competitions, providing students with opportunities to discover
              and develop their interests. Special emphasis is placed on
              extracurricular activities like music, drama, and sports, which
              help nurture creativity and teamwork.
            </p>
            <p className="my-2 ">
              Additionally, the programme includes community service projects
              that encourage students to engage with their local environment,
              fostering empathy and a sense of social responsibility. Mentorship
              and leadership training are integral components, empowering
              students to take initiative and lead their peers effectively.
              Through these enriching experiences, students gain confidence,
              enhance their communication skills, and learn the value of
              collaboration. Overall, the Student Enrichment Programme at NKBGS
              School not only prepares students for academic success but also
              equips them with the life skills necessary for future endeavors.
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

export default StudentEnrichmentPrograme;
