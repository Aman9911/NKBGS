import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";

const ResultTable = ({ result, path }) => {
  const router = useRouter();
  const [toppers, setToppers] = useState({});

  const fetchToppers = useCallback(async () => {
    const topperMap = {};
    for (const item of result) {
      const names = [];
      for (let i = 0; i < item.topper.length; i++) {
        const response = await cbseResultClassXService.getTopperById(
          item.topper[i]
        );
        if (response) names.push(response.name);
      }
      topperMap[item.$id] = names.toString();
    }
    setToppers(topperMap);
  }, [result]);

  useEffect(() => {
    fetchToppers();
  }, [fetchToppers]);

  const handleDeleteWithId = async (data, methodFun) => {
    for (let i = 0; i < data.length; i++) {
      await methodFun(data[i]);
    }
  };

  const handleDelete = async (data) => {
    const id = await cbseResultClassXService.getCbseResultClassXById(data);
    await handleDeleteWithId(
      id.topper,
      cbseResultClassXService.deleteTopper.bind(cbseResultClassXService)
    );
    await handleDeleteWithId(
      id.achiever,
      cbseResultClassXService.deleteAchiever.bind(cbseResultClassXService)
    );
    await handleDeleteWithId(
      id.ninety,
      cbseResultClassXService.deleteNinety.bind(cbseResultClassXService)
    );
    await handleDeleteWithId(
      id.subjectWise,
      cbseResultClassXService.deleteSubjectWise.bind(cbseResultClassXService)
    );
    const response = await cbseResultClassXService.deleteCbseResultClassX(data);
    if (response) {
      toast.success("Data uploaded successfully", { position: "top-right" });
    }
  };

  return (
    <table className="table-auto min-w-full text-sm bg-gray-400">
      <thead className="text-xs uppercase font-medium ">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base tracking-wider border-2"
          >
            Session
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base tracking-wider border-2"
          >
            Heading
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base tracking-wider border-2"
          >
            Topper
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-base tracking-wider border-2"
          >
            Edit
          </th>
          <th
            scope="col"
            className="px-3 py-3 text-left text-base tracking-wider border-2"
          >
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {result?.map((item) => (
          <tr key={item.$id}>
            <td className="px-6 py-3 text-left  border-2 ">{item.session}</td>
            <td className="px-6 py-3 text-left  border-2 ">{item.heading}</td>
            <td className="px-6 py-3 text-left  border-2 ">
              {toppers[item.$id] || "Loading..."}
            </td>
            <td className="px-6 py-3 text-left  border-2 ">
              <p
                className="inline-block ml-3 hover:cursor-pointer text-lg "
                onClick={() => router.push(`${path}${item.$id}`)}
              >
                <MdEdit />
              </p>
            </td>
            <td className="px-6 py-3 text-left  border-2 ">
              <p
                className="inline-block ml-3 hover:cursor-pointer text-lg "
                onClick={() => handleDelete(item.$id)}
              >
                <MdDelete />
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
