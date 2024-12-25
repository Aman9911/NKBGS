"use client";
import Container from "@/app/components/client/Container";
import newsLetterService from "@/appwrite/appwriteNewsLetter";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React, { useEffect, useState } from "react";

const ENewsLetter = () => {
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    try {
      newsLetterService.getNewsLetter().then((data) => {
        if (data) {
          setDevelopment(data.documents.reverse());
        }
      });
    } catch (error) {
      console.error("Fail to get News Letter data : ", error);
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
            <h1 className="text-3xl  text-center font-bold">E-Newsletter</h1>

            <p className="mt-2 ">
              The NKBGS School E-Newsletter goes beyond simply sharing news; it
              creates a bridge that connects every corner of the school
              community. From welcoming new students and staff to recognizing
              outstanding student projects, the newsletter is a valuable
              resource that celebrates every achievement, no matter how big or
              small. Sections dedicated to academic insights allow teachers to
              share tips, study resources, and innovative teaching methods,
              while students contribute through creative writing, artwork, and
              reflections on school life, making each edition a true reflection
              of their talents and voices.
            </p>
            <p className="my-2 ">
              Additionally, the E-Newsletter includes updates on important
              events such as annual days, sports meets, science fairs, and
              cultural festivals. Parents are kept informed of upcoming PTA
              meetings, workshops, and other opportunities to engage with the
              school. Alumni features also allow former students to share their
              journeys and inspire current students, building a strong network
              that extends beyond graduation. Overall, the NKBGS School
              E-Newsletter is an essential part of the school’s digital
              footprint, embodying its commitment to holistic education,
              community engagement, and the development of responsible global
              citizens.
            </p>

            <div className="md:ml-2">
              {development.map((data, index) => (
                <div key={data.$id} className="table-row">
                  <p className="table-cell md:px-1">{index + 1}.</p>
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

export default ENewsLetter;
