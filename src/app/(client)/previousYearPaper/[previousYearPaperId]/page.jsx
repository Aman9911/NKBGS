"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/client/Container";
import previousYearPaperService from "@/appwrite/appwritePreviousYearPaper";
import pdfUploadService from "@/appwrite/pdfUploadService";
import Loader from "@/app/components/Loader";

const PreviousYearPaperId = ({ params }) => {
  const id = params.previousYearPaperId.slice(5);
  const [loading, setLoading] = useState(true);
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    previousYearPaperService.getPreviousYearPaper().then((paper) => {
      if (paper) {
        const selectedClass = paper.documents.filter((p) => p.class === id);
        setPapers(selectedClass);

        setLoading(false);
      }
    });
  }, [id]);

  const groupBySession = (data) => {
    const grouped = data.reduce((acc, item) => {
      if (!acc[item.session]) {
        acc[item.session] = [];
      }
      acc[item.session].push(item);
      return acc;
    }, {});

    for (let session in grouped) {
      grouped[session].sort(
        (a, b) => new Date(b.$createdAt) - new Date(a.$createdAt)
      );
    }

    return Object.entries(grouped).sort(([, a], [, b]) => {
      return new Date(b[0]?.$createdAt || 0) - new Date(a[0]?.$createdAt || 0);
    });
  };

  const handlePdf = async (id) => {
    try {
      const fileDownload = await pdfUploadService.getFileDownload(id);
      const blob = await fetch(fileDownload.href).then((res) => res.blob());
      const url = URL.createObjectURL(blob);
      if (url) {
        window.open(url);
      }
    } catch (error) {}
  };

  const groupedData = groupBySession(papers);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="border-2 md:rounded-lg md:w-3/4 bg-[#2C5F2D] shadow-xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold ">Class {id}</h1>

          <div className="mt-2 shadow-xl  rounded-xl">
            {groupedData?.map(([session, items]) => (
              <div className="p-2" key={session}>
                <h2 className="text-lg font-bold">{session}</h2>
                {session ? (
                  <table className="table-auto min-w-full text-sm bg-[#97BC62]">
                    <thead className="text-xs uppercase font-medium ">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-base tracking-wider border-2"
                        >
                          Subject name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-base tracking-wider border-2"
                        >
                          Link
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={item.$id}>
                          <td className="px-6 py-3 text-left  border-2 ">
                            {item.subject} {item.examType}
                          </td>
                          <td className="px-6 py-3 text-left  border-2 ">
                            <p
                              className="cursor-pointer text-blue-600 font-semibold max-w-fit inline-block"
                              onClick={(e) => handlePdf(item.fileData)}
                            >
                              Read and download
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PreviousYearPaperId;
