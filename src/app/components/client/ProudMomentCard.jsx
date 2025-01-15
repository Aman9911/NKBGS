import React from "react";
import { MdDelete } from "react-icons/md";

const ProudMomentCard = ({ proud, handleDelete, handleClick }) => {
  const formatDate = (isoDate) => {
    const formattedDate = new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
    return formattedDate;
  };
  return (
    <div className="mt-4 overflow-x-auto ">
      <table className="min-w-full text-xs md:text-base">
        <thead className="rounded-t-lg md:text-lg">
          <tr className="text-right border-b border-opacity-30 border-gray-800">
            <th title="Ranking" className="text-center ">
              Date
            </th>
            <th title="Ranking" className="text-center ">
              Name of the host School/Org.
            </th>
            <th title="Ranking" className="text-center ">
              Name of the Competition/Event
            </th>
            <th title="Ranking" className="text-center ">
              Participants
            </th>
            <th title="Ranking" className="text-center ">
              Result
            </th>
            {handleDelete && (
              <th title="Ranking" className="text-center ">
                Delete
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {proud?.map((item) => (
            <tr
              key={item.$id || item.date}
              onClick={
                handleClick ? () => handleClick([item.image]) : undefined
              }
              className="text-center border-b border-opacity-30 border-gray-800 cursor-pointer hover:bg-slate-400/50"
            >
              <td className="px-2 py-2 text-center ">
                {formatDate(item.date)}
              </td>
              <td className="px-2 py-2 text-center">{item.hostSchool}</td>
              <td className="px-2 py-2 text-center ">{item.eventName}</td>
              <td className="px-2 py-2 text-center whitespace-nowrap">
                {item.participants.split(",").map((name) => (
                  <p key={name}>{name}</p>
                ))}
              </td>
              <td className="px-2 py-2 text-center">
                {item.prize.split(",").map((name) => (
                  <p key={name}>{name}</p>
                ))}
              </td>
              {handleDelete && (
                <td className="px-2 py-2 text-center">
                  <p className="inline-block ml-3 hover:cursor-pointer text-lg ">
                    <MdDelete onClick={() => handleDelete(item)} />
                  </p>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProudMomentCard;
