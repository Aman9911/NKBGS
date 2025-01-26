"use client";
import Container from "@/app/components/client/Container";
import nkbgsFamilyService from "@/appwrite/appwriteNkbgsFamily";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import { useEffect, useState } from "react";

const departmentPriority = [
  "Management",
  "English",
  "Science",
  "Mathematics",
  "Commerce",
  "Economics",
  "Social Studies",
  "IT",
  "Psychology",
  "Physical Education",
  "Hindi & Sanskrit",
  "French & German",
  "Library",
  "Fine Arts",
  "Music",
  "Dance",
  "Sports",
  "Yoga",
  "Primary Wing",
  "Pre Primary Wing",
];

const NkbgsFamilyPage = () => {
  const [family, setFamily] = useState([]);
  const [loading, setLoading] = useState(true);

  const groupByDepartment = (data) => {
    return data.reduce((acc, item) => {
      if (!acc[item.department]) {
        acc[item.department] = [];
      }
      acc[item.department].push(item);
      return acc;
    }, {});
  };

  useEffect(() => {
    nkbgsFamilyService
      .getNkbgsFamily()
      .then((data) => {
        if (data) {
          const groupedData = groupByDepartment(data.documents);
          const sortedGroupedData = Object.entries(groupedData).sort(
            ([deptA], [deptB]) => {
              const indexA = departmentPriority.indexOf(deptA);
              const indexB = departmentPriority.indexOf(deptB);
              return (
                (indexA === -1 ? Infinity : indexA) -
                (indexB === -1 ? Infinity : indexB)
              );
            }
          );
          setFamily(sortedGroupedData);
        }
      })
      .catch((error) => {
        console.error("Fail to get NKBGS Family data", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Container>
      <div className="max-w-screen max-w-full p-5 sm:p-5 ">
        {loading ? (
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto ">
            <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              NKBGS Family
            </h1>

            {Array.from({ length: 3 }).map((_, index) => (
              <div className="mt-2 md:mt-4 " key={index}>
                <h1 className="font-bold text-xl h-7 w-44 bg-slate-300 rounded"></h1>
                <div className="flex flex-wrap gap-4 mt-2 ml-4 md:ml-8">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      className="flex flex-col gap-2 md:w-60 w-2/5 animate-pulse"
                      key={index}
                    >
                      <div className="aspect-square relative overflow-hidden rounded-xl">
                        <div className="object-cover w-56 h-56 md:w-96 md:h-96 bg-slate-300 " />
                      </div>
                      <div className=" cursor-pointer text-center ">
                        <p className="text-lg font-semibold h-2 bg-slate-300 rounded mb-1"></p>
                        <p className="text-base h-2 bg-slate-300 rounded"></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
            <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
              NKBGS Family
            </h1>

            {family?.map(([department, items], index) => (
              <div className="mt-2 md:mt-4" key={index}>
                {department !== "Management" && (
                  <h1 className="font-bold text-xl ">
                    {department} Department
                  </h1>
                )}
                <div className="flex flex-wrap gap-4 mt-2 ml-4 md:ml-8">
                  {items.map((item) => (
                    <div
                      className="flex flex-col gap-2 md:w-60 w-2/5 "
                      key={item.$id}
                    >
                      <div className="w-full relative overflow-hidden rounded-xl">
                        <Image
                          height={1200}
                          width={1200}
                          src={imageUploadService.getPreview(item.file).href}
                          alt="list"
                          className="object-cover h-full w-full "
                        />
                      </div>
                      <div className=" cursor-pointer text-center">
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-base">{item.designation}</p>
                        {department !== "Management" && (
                          <p className="text-base">({item.qualification})</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default NkbgsFamilyPage;
