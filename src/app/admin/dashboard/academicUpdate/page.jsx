"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import toast from "react-hot-toast";
import AcademicUpdateForm from "@/app/components/AcademicUpdateForm";
import Table from "@/app/components/client/Table";
import academicUpdateService from "@/appwrite/appwriteAcademicUpdate";
import pdfUploadService from "@/appwrite/pdfUploadService";

const AcademicUpdatePage = () => {
  const [academicUpdate, setAcademicUpdate] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [selectedClass, setSelectedClass] = useState("I");
  const [data, setData] = useState(
    academicUpdate.filter((item) => item.class == selectedClass)
  );
  const classes = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];

  const handleClassClick = (className) => {
    setSelectedClass(className);
    const selectedData = academicUpdate.filter(
      (item) => item.class === className
    );
    setData(selectedData);
  };

  const handleData = async (data) => {
    try {
      const results = await Promise.all(
        data.map(async (id) => {
          const sub = await academicUpdateService.getSubject(id);
          if (sub) {
            return sub;
          }
          return null;
        })
      );
      const filteredResults = results.filter((item) => item !== null);
      return filteredResults;
    } catch (error) {
      console.error("Error in handleData:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAcademicUpdate = async () => {
      try {
        const data = await academicUpdateService.getAcademicUpdate();
        if (data) {
          const updatedDocuments = await Promise.all(
            data.documents.map(async (doc) => {
              const subject = await handleData(doc.subject);
              return {
                ...doc,
                subject,
              };
            })
          );
          setAcademicUpdate(updatedDocuments);
          setData(
            updatedDocuments.filter((item) => item.class == selectedClass)
          );
        }
      } catch (error) {
        console.error("Error fetching academic updates:", error);
      }
    };
    fetchAcademicUpdate();
  }, []);

  const handleDelete = (data) => {
    if (data.$id) {
      const deletedItemLink = academicUpdate
        .map((item) => item.subject.filter((i) => i.$id === data.$id))
        .find((item) => item.length !== 0);
      const remainingData = academicUpdate
        .map((item) => {
          const filteredSubjects = item.subject.filter(
            (subject) => subject.$id !== data.$id
          );
          return filteredSubjects.length < item.subject.length
            ? { ...item, subject: filteredSubjects.map((item) => item.$id) }
            : null;
        })
        .find((item) => item !== null);

      remainingData.subject.length !== 0
        ? academicUpdateService.updateAcademicUpdate(
            remainingData.$id,
            remainingData
          )
        : academicUpdateService.deleteAcademicUpdate(remainingData.$id);
      academicUpdateService.deleteSubject(data.$id);
      pdfUploadService.deleteFile(deletedItemLink[0].link);
      toast.success("Data deleted successfully", { position: "top-right" });
    } else {
      toast.error("Some error to delete file", { position: "top-right" });
    }
  };

  return (
    <>
      <div className="text-right">
        <Button
          label={toggle ? "Cancel" : "Add new"}
          small
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {toggle ? (
        <div className="pt-12">
          <AcademicUpdateForm setToggle={setToggle} />
        </div>
      ) : (
        <>
          <div className="border-2 md:rounded-lg  bg-[#2C5F2D] shadow-xl">
            <div className="p-4">
              <h1 className="text-2xl font-bold ">Academic Updates</h1>

              <div className="mt-4 bg-[#97BC62] w-fit rounded-lg">
                {classes.map((classItem) => (
                  <button
                    key={classItem}
                    onClick={() => handleClassClick(classItem)}
                    className={`p-2 m-2 rounded hover:bg-[#2C5F2D] ${
                      selectedClass == classItem ? "bg-[#2C5F2D]" : ""
                    }`}
                  >
                    {classItem}
                  </button>
                ))}
              </div>
              <div className="mt-2 shadow-xl  rounded-xl">
                <h2 className="text-xl font-semibold">Class {selectedClass}</h2>
                {selectedClass &&
                  data?.map((data) => (
                    <div className="p-2" key={data.$id}>
                      {data.title ? (
                        <div className="mt-2">
                          <h2 className="text-lg font-bold">{data.title}</h2>
                          <Table
                            tHead={["Subject Name", "Link"]}
                            tData={data.subject}
                            editBtn={true}
                            handleDelete={handleDelete}
                          />
                        </div>
                      ) : (
                        <p>Data is not available</p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AcademicUpdatePage;
