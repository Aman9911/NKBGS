"use client";
import React, { useEffect, useState } from "react";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import pdfUploadService from "@/appwrite/pdfUploadService";
import toast from "react-hot-toast";
import Card from "@/app/components/card/Card";
import admissionService from "@/appwrite/appwriteAdmission";

const Admission = () => {
  const [admission, setAdmission] = useState([]);
  const [admissionProcess, setAdmissionProcess] = useState([]);

  useEffect(() => {
    admissionService.getAdmission().then((data) => {
      if (data) {
        setAdmission(data.documents.filter((item) => item.tag === null));
        setAdmissionProcess(data.documents.filter((item) => item.tag !== null));
      }
    });
  }, []);

  const handleFileChange = async (file) => {
    const pdf = file ? await pdfUploadService.uploadFile(file) : null;
    if (pdf) {
      const data = await admissionService.createAdmission({
        name: pdf.name,
        pdfData: pdf.$id,
      });
      setAdmission([...admission, data]);
      toast.success("Data uploaded successfully", { position: "top-right" });
    }
  };

  const handleDelete = (data) => {
    if (data) {
      admissionService.deleteAdmission(data.$id);
      pdfUploadService.deleteFile(data.link);
      setAdmission(admission.filter((mod) => mod !== data));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };

  const handleChange = async (id, e) => {
    const pdfData = e.target.files[0];
    if (id && pdfData) {
      const deletedFileId = admissionProcess.find(
        (item) => item.$id === id
      ).pdfData;
      await pdfUploadService.deleteFile(deletedFileId);
      const pdf = await pdfUploadService.uploadFile(pdfData);
      if (pdf) {
        await admissionService.updateAdmission(id, { pdfData: pdf.$id });
        toast.success("Data uploaded successfully", { position: "top-right" });
      }
    }
  };
  return (
    <>
      <table className="min-w-full text-xs md:text-base my-8">
        <tbody>
          {admissionProcess?.map((item) => (
            <tr
              key={item.$id}
              className="text-center border-b border-opacity-30 border-gray-800"
            >
              <td className="px-2 py-2 text-center ">{item.name}</td>
              <td className="px-2 py-2 text-center ">
                <input
                  type="file"
                  className="text-sm text-grey-500
            file:mr-5 file:py-3 file:px-10
            file:rounded-full file:border-0
            file:text-md file:font-semibold  file:text-white
            file:bg-indigo-600
            hover:file:cursor-pointer hover:file:opacity-80"
                  onChange={(e) => handleChange(item.$id, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ImageUpload onChange={handleFileChange} />
      <Card development={admission} handleDelete={handleDelete} />
    </>
  );
};

export default Admission;
