import pdfUploadService from "@/appwrite/pdfUploadService";
import { MdDelete } from "react-icons/md";

const Table = ({ tHead, tData, editBtn = false, handleDelete }) => {
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

  return (
    <table className="table-auto min-w-full text-sm bg-purple-400">
      <thead className="text-xs uppercase font-medium ">
        <tr>
          {tHead?.map((head, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-base tracking-wider border-2"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tData?.map((data, index) => (
          <tr key={index}>
            <td className="px-6 py-3 text-left  border-2 ">{data.subject}</td>
            <td className="px-6 py-3 text-left  border-2 ">
              <p
                className="cursor-pointer text-blue-600 font-semibold max-w-fit inline-block"
                onClick={(e) => handlePdf(data.link)}
              >
                Read and download
              </p>
              {editBtn && (
                <>
                  <p
                    className="inline-block ml-3 hover:cursor-pointer text-lg "
                    onClick={() => handleDelete(data)}
                  >
                    <MdDelete />
                  </p>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
