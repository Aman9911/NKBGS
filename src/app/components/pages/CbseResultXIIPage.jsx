"use client";
import Container from "@/app/components/client/Container";
import StudentCard from "@/app/components/client/StudentCard";
import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";

const CbseResultXIIPage = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  function addPositions(data) {
    if (!Array.isArray(data)) {
      throw new TypeError("Input data must be an array");
    }

    const sortedData = data
      .map((item) => ({
        ...item,
        percentage: parseFloat(item.percentage),
      }))
      .sort((a, b) => b.percentage - a.percentage);

    let currentPosition = 0;
    let lastPercentage = null;

    sortedData.forEach((item, index) => {
      if (item.percentage !== lastPercentage) {
        currentPosition = index + 1;
        lastPercentage = item.percentage;
      }
      item.position = currentPosition;
    });
    return sortedData;
  }

  useEffect(() => {
    cbseResultClassXService.getCbseResultClassXII().then(async (data) => {
      if (data) {
        const updatedDocuments = await Promise.all(
          data.documents.map(async (doc) => {
            const ninety = await handleData(
              doc.ninety,
              cbseResultClassXService.getNinetyById.bind(
                cbseResultClassXService
              )
            );

            const top = await handleData(
              doc.topper,
              cbseResultClassXService.getTopperById.bind(
                cbseResultClassXService
              )
            );
            const topper = addPositions(top);

            const achiever = await handleData(
              doc.achiever,
              cbseResultClassXService.getAchieverById.bind(
                cbseResultClassXService
              )
            );

            const subjectWiseRaw = await handleData(
              doc.subjectWise,
              cbseResultClassXService.getSubjectWiseById.bind(
                cbseResultClassXService
              )
            );

            const subjectWise = subjectWiseRaw.reduce((acc, current) => {
              const existingSubject = acc.find(
                (item) => item.subject === current.subject
              );

              if (!existingSubject) {
                acc.push({
                  subject: current.subject,
                  percentage: Number(current.percentage),
                  data: [
                    {
                      rollNo: current.rollNo,
                      name: current.studentName,
                    },
                  ],
                });
              } else {
                existingSubject.data.push({
                  rollNo: current.rollNo,
                  name: current.studentName,
                });
              }

              return acc;
            }, []);

            return {
              ...doc,
              ninety,
              topper,
              achiever,
              subjectWise,
            };
          })
        );
        setSelectedItem(updatedDocuments[0].session);
        setResult(updatedDocuments.reverse());
        setLoading(false);
      }
    });
  }, []);

  const handleClick = (index) => {
    const updatedNav = result.map((item) => ({
      ...item,
    }));
    setResult(updatedNav);
    setSelectedItem(updatedNav[index].session);
  };

  const handleData = async (data, methodFun) => {
    try {
      const results = await Promise.all(
        data.map(async (id) => {
          const nine = await methodFun(id);
          if (nine) {
            return nine;
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

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="flex flex-row gap-2 flex-wrap">
        {result.map((data, index) => (
          <button
            key={data.$id}
            onClick={() => handleClick(index)}
            className={`relative py-2 px-4 rounded  ${
              data.session === selectedItem ? "font-bold" : ""
            }`}
          >
            <span
              className={`absolute left-0 bottom-0 h-0.5 bg-black transition-transform duration-700 ease-in-out ${
                data.session === selectedItem ? "w-full" : "w-0"
              }`}
            ></span>
            {data.session}
          </button>
        ))}
      </div>
      {result.map(
        (item) =>
          item.session === selectedItem && (
            <div
              key={item.$id}
              className="max-w-screen mx-auto p-5 sm:p-10 container"
            >
              <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {item.heading}
                </h1>
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {item.heading2}
                </h1>
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {item.heading3}
                </h1>
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  {item.heading4}
                </h1>
              </div>

              <div className="mb-10 overflow-hidden flex flex-col mx-auto">
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  SCHOOL TOPPERS
                </h1>
                <div className="flex flex-row flex-wrap justify-center gap-6 ">
                  {item.topper.map((top) => (
                    <StudentCard key={top.$id} data={top} tag="toper" />
                  ))}
                </div>
              </div>

              <div className="mb-10 overflow-hidden flex flex-col mx-auto">
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  Perfect 100 Achievers
                </h1>
                <div className="flex flex-row flex-wrap justify-center gap-8">
                  {item.achiever.map((achiev) => (
                    <StudentCard key={achiev.$id} data={achiev} />
                  ))}
                </div>
              </div>

              <div className="mb-10 overflow-hidden flex flex-col mx-auto">
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  Student Securing 90% and above
                </h1>
                <div className="overflow-x-auto ">
                  <table className="min-w-full text-xs md:text-base">
                    <thead className="rounded-t-lg ">
                      <tr className="text-right">
                        <th title="Ranking" className="text-center ">
                          S. No.
                        </th>
                        <th title="Team name" className=" text-center">
                          Roll No
                        </th>
                        <th title="Wins" className="text-center">
                          Student Name
                        </th>
                        <th title="Losses" className="text-center">
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.ninety.map((item, index) => (
                        <tr
                          key={item.$id}
                          className="text-center border-b border-opacity-20 border-gray-800"
                        >
                          <td className="px-2 py-2 text-center">
                            <span>{index + 1}</span>
                          </td>
                          <td className="px-2 py-2 text-center">
                            <span>{item.rollNo}</span>
                          </td>
                          <td className="px-2 py-2 text-center">
                            <span>{item.studentName}</span>
                          </td>
                          <td className="px-2 py-2 text-center">
                            <span>{item.percentage}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-10 overflow-hidden flex flex-col mx-auto">
                <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                  Highest Marks Subject Wise Analysis
                </h1>
                <div className="overflow-x-auto ">
                  <table className="min-w-full text-xs md:text-base">
                    <thead className="rounded-t-lg ">
                      <tr className="text-right ">
                        <th
                          title="Ranking"
                          className="text-center border border-gray-800"
                        >
                          Subjects
                        </th>
                        <th
                          title="Team name"
                          className=" text-center border border-gray-800"
                        >
                          %
                        </th>
                        <th
                          title="Wins"
                          className="text-center border border-gray-800"
                        >
                          S. No.
                        </th>
                        <th
                          title="Losses"
                          className="text-center border border-gray-800"
                        >
                          Roll No
                        </th>
                        <th
                          title="Losses"
                          className="text-center border border-gray-800"
                        >
                          Student Name
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.subjectWise.map((item, index) => (
                        <React.Fragment key={index}>
                          <tr className="text-center " key={index}>
                            <td
                              className="px-2 py-2 text-center border border-gray-800"
                              rowSpan={item?.data?.length + 1}
                            >
                              <span>{item.subject}</span>
                            </td>
                            <td
                              className="px-2 py-2 text-center border border-gray-800"
                              rowSpan={item?.data?.length + 1}
                            >
                              <span>{item.percentage}</span>
                            </td>
                          </tr>
                          {item?.data?.map((data, index) => (
                            <tr className="border-b" key={data.subject + index}>
                              <td className="px-2 py-2 text-center border border-gray-800">
                                <span>{index + 1}</span>
                              </td>
                              <td className="px-2 py-2 text-center border border-gray-800">
                                <span>{data.rollNo}</span>
                              </td>
                              <td className="px-2 py-2 text-center border border-gray-800">
                                <span>{data.name}</span>
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
      )}
    </Container>
  );
};

export default CbseResultXIIPage;
