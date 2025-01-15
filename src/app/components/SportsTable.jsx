import clubService from "@/appwrite/appwriteClub";
import sportService from "@/appwrite/appwriteSport";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React from "react";
import { MdDelete } from "react-icons/md";

const SportsTable = ({ info, setInfo }) => {
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
  const formatDate = (isoDate) => {
    const formattedDate = new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    return formattedDate;
  };
  const handleDelete = async (data) => {
    const res = data.competitionName
      ? await sportService.deleteSportDetail(data.$id)
      : await clubService.deleteClubDetail(data.$id);
    const imgRes = await pdfUploadService.deleteFile(data.details);
    if (res && imgRes) {
      setInfo(
        info.filter((fil) => fil.$id !== data.$id || fil.date !== data.date)
      );
    }
  };
  return (
    <table className="min-w-full text-xs md:text-base my-8">
      <thead className="rounded-t-lg md:text-lg">
        <tr className="text-right border-b border-opacity-30 border-gray-800">
          <th title="Ranking" className="text-center ">
            Date
          </th>
          <th title="Ranking" className="text-center ">
            {info[0].competitionName ? "Name of the Competition" : "Event Name"}
          </th>
          <th title="Ranking" className="text-center ">
            View Details
          </th>
          {setInfo && (
            <th title="Ranking" className="text-center ">
              Delete
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {info?.map((item) => (
          <tr
            key={item.date}
            className="text-center border-b border-opacity-30 border-gray-800 hover:bg-slate-400/50"
          >
            <td className="px-2 py-2 text-center ">{formatDate(item.date)}</td>
            <td className="px-2 py-2 text-center ">
              {item.competitionName || item.eventName}
            </td>
            <td
              className="px-2 py-2 text-center text-blue-600 hover:cursor-pointer hover:text-blue-800 "
              onClick={() => handleFilePreview(item.details)}
            >
              Click to view Details
            </td>
            {setInfo && (
              <td className="px-2 py-2 text-center ">
                <p className="inline-block ml-3 hover:cursor-pointer text-lg ">
                  <MdDelete onClick={() => handleDelete(item)} />
                </p>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SportsTable;
