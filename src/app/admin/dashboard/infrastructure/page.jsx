"use client";
import React, { useEffect, useState } from "react";
import infrastructureService from "@/appwrite/appwriteInfrastructure";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button";
import Infra from "@/app/components/Infra";
import imageUploadService from "@/appwrite/imageUploadService";
import toast from "react-hot-toast";

const SalePage = () => {
  const [infrastructure, setInfrastructure] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    infrastructureService.getInfrastructure().then((infra) => {
      if (infra) {
        setInfrastructure(infra.documents);
      }
    });
  }, []);

  const handleOnDelete = async (data) => {
    if (data) {
      await infrastructureService.deleteInfrastructure(data.$id);
      await imageUploadService.deleteFile(data.thumbnail);
      toast.success("Data deleted successfully", { position: "top-right" });
    }
  };

  const onSubmit = async (data) => {
    setIsDisabled(true);
    const thumbnail = data
      ? await imageUploadService.uploadFile(data.thumbnail)
      : null;
    if (thumbnail) {
      await infrastructureService.createInfrastructure({
        ...data,
        title: data.title.toUpperCase(),
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
          <Infra onSubmit={onSubmit} isDisabled={isDisabled} />
        </div>
      ) : (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {infrastructure.map((infra) => (
            <InfoCard
              key={infra.$id}
              data={infra}
              handleOnDelete={handleOnDelete}
              path={"/admin/dashboard/infrastructure"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SalePage;
