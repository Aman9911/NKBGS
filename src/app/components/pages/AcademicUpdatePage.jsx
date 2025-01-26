"use client";
import { useEffect, useState } from "react";
import Container from "@/app/components/client/Container";
import Table from "@/app/components/client/Table";
import academicUpdateService from "@/appwrite/appwriteAcademicUpdate";
import Loader from "@/app/components/Loader";

const AcademicUpdatePage = () => {
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
  const [selectedClass, setSelectedClass] = useState("I");
  const [academicUpdate, setAcademicUpdate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(
    academicUpdate.filter((item) => item.class == selectedClass)
  );

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
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching academic updates:", error);
      }
    };
    fetchAcademicUpdate();
  }, [selectedClass]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="border-2 md:rounded-lg md:w-3/4 bg-purple-500 text-gray-950 shadow-xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold ">Academic Updates</h1>

          <div className="mt-4 bg-purple-400 w-fit rounded-lg">
            {classes.map((classItem) => (
              <button
                key={classItem}
                onClick={() => handleClassClick(classItem)}
                className={`p-2 m-2 rounded hover:bg-purple-500 ${
                  selectedClass == classItem ? "bg-purple-500" : ""
                }`}
              >
                {classItem}
              </button>
            ))}
          </div>
          <div className="mt-2 shadow-xl  rounded-xl">
            {selectedClass &&
              data?.map((data) => (
                <div className="p-2" key={data.$id}>
                  {data.title ? (
                    <div className="mt-2">
                      <h2 className="text-lg font-bold">{data.title}</h2>
                      <Table
                        tHead={["Subject Name", "Link"]}
                        tData={data.subject}
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
    </Container>
  );
};

export default AcademicUpdatePage;
