"use client";
import React, { useEffect, useState } from "react";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button";
import Infra from "@/app/components/Infra";
import imageUploadService from "@/appwrite/imageUploadService";
import toast from "react-hot-toast";
import nationalAndInternationalService from "@/appwrite/appwriteNationalAndInternational";

const NationalAndInternationalPage = () => {
  const [infrastructure, setInfrastructure] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    nationalAndInternationalService
      .getNationalAndInternational()
      .then((infra) => {
        if (infra) {
          setInfrastructure(infra.documents);
        }
      });
  }, []);

  const handleOnDelete = async (data) => {
    if (data) {
      await nationalAndInternationalService.deleteNationalAndInternational(
        data.$id
      );
      await imageUploadService.deleteFile(data.thumbnail);
      toast.success("Data deleted successfully", { position: "top-right" });
    }
  };

  const onSubmit = async (data) => {
    const thumbnail = data
      ? await imageUploadService.uploadFile(data.thumbnail)
      : null;
    if (thumbnail) {
      await nationalAndInternationalService.createNationalAndInternational({
        ...data,
        thumbnail: thumbnail.$id,
      });
      toast.success("Data uploaded successfully", { position: "top-right" });
      setToggle(!toggle);
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
          <Infra onSubmit={onSubmit} />
        </div>
      ) : (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {infrastructure.map((infra) => (
            <InfoCard
              key={infra.$id}
              data={infra}
              handleOnDelete={handleOnDelete}
              path={"/admin/dashboard/nationalAndInternationalDays"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default NationalAndInternationalPage;
