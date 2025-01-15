"use client";
import Container from "@/app/components/client/Container";
import admissionService from "@/appwrite/appwriteAdmission";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React, { useEffect, useState } from "react";

const AdmissionProcess = () => {
  const [admission, setAdmission] = useState([]);
  useEffect(() => {
    try {
      admissionService.getAdmission().then((data) => {
        if (data) {
          setAdmission(data.documents.filter((id) => id.tag !== null));
        }
      });
    } catch (error) {
      console.error("Fail to get Admission : ", error);
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
      <div className="max-w-screen mx-auto p-5 sm:pt-5 sm:px-10">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
          <h1 className="text-xl text-center uppercase sm:text-2xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            Admission Process
          </h1>
          <div className=" flex flex-col gap-4 justify-center">
            <p>
              <span className="font-semibold">Pre – Primary to Class IX </span>:
              Admissions in these classes are also advertised in the newspapers,
              however it is mostly against vacancies arising out of withdrawals.
              Admission closes by July end and any further admission is subject
              to availability of seat and approval by the Directorate of
              Education.
            </p>
            <p>
              <span className="font-semibold">Age Eligibility </span>:
              Pre-Primary: 4 + , Class I : 5 + as on 31st March of the academic
              session sought. Class I onwards previous class report card is a
              must.
            </p>
            <p>
              <span className="font-semibold">Registration </span>: Registration
              form can be downloaded or collected from the school, should be
              duly filled in and submitted along with the following documents:{" "}
            </p>
            <ul className="list-disc list-inside md:pl-10 pl-5">
              <li>Copy of Birth Certificate</li>
              <li>Previous class report card</li>
              <li>Transfer certificate from the previous school</li>
              <li>Residence proof</li>
              <li>Medical fitness certificate</li>
            </ul>
            <p>
              <span className="font-semibold">Entrance Test </span>: The
              children who have registered will have to appear for the oral /
              written entrance test as laid down for different classes. The
              Admission in different classes is subjected to availability of
              seat in that particular class
            </p>
            <hr className="m-5 border-gray-500" />
            <h1 className="font-semibold text-xl text-indigo-600 ">
              Important links
            </h1>
            <p>
              <span className="font-semibold text-black">Pre-School :</span>{" "}
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => handleFilePreview(admission[0].pdfData)}
              >
                Registration & Admission Criteria 2025-26
              </span>
            </p>
            <p>
              <span className="font-semibold text-black">Class I-XI :</span>{" "}
              <span
                className="cursor-pointer text-blue-600"
                onClick={() => handleFilePreview(admission[1].pdfData)}
              >
                Registration & Admission Criteria 2025-26
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default AdmissionProcess;
