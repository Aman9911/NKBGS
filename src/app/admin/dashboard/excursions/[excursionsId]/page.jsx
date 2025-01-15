"use client";
import Button from "@/app/components/Button";
import Infra from "@/app/components/Infra";
import excursionsService from "@/appwrite/appwriteExcursions";
import imageUploadService from "@/appwrite/imageUploadService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ExcursionsId = ({ params }) => {
  const [infrastructure, setInfrastructure] = useState(null);
  const id = params.excursionsId;
  const router = useRouter();

  useEffect(() => {
    excursionsService.getExcursionsById(id).then((infraData) => {
      if (infraData) {
        setInfrastructure(infraData);
      }
    });
  }, [id]);

  const onSubmit = async (data) => {
    const thumbnail =
      data.thumbnail instanceof File
        ? await imageUploadService.uploadFile(data.thumbnail)
        : data?.thumbnail;
    if (thumbnail) {
      await excursionsService.updateExcursions(id, {
        ...data,
        thumbnail: thumbnail.$id,
      });
      toast.success("Data uploaded successfully", { position: "top-right" });
      router.push("/admin/dashboard/excursions");
    }
  };

  return (
    <>
      <div className="text-right">
        <Button
          label="Cancel"
          small
          onClick={() => {
            router.push("/admin/dashboard/excursions");
          }}
        />
      </div>
      <Infra infrastructure={infrastructure} onSubmit={onSubmit} />
    </>
  );
};

export default ExcursionsId;
