"use client";
import { PuffLoader } from "react-spinners";

const AdminLoader = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <PuffLoader size={100} color="blue" />
    </div>
  );
};

export default AdminLoader;
