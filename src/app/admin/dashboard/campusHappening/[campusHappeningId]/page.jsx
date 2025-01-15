"use client";
import Button from "@/app/components/Button";
import Infra from "@/app/components/Infra";
import campusHappeningService from "@/appwrite/appwriteCampusHappening";
import imageUploadService from "@/appwrite/imageUploadService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CampusHappeningId = ({ params }) => {
  const [infrastructure, setInfrastructure] = useState(null);
  const id = params.campusHappeningId;
  const router = useRouter();

  useEffect(() => {
    campusHappeningService.getCampusHappeningById(id).then((infraData) => {
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
      await campusHappeningService.updateCampusHappening(id, {
        ...data,
        thumbnail: thumbnail.$id,
      });
      toast.success("Data uploaded successfully", { position: "top-right" });
      router.push("/admin/dashboard/campusHappening");
    }
  };

  return (
    <>
      <div className="text-right">
        <Button
          label="Cancel"
          small
          onClick={() => {
            router.push('/admin/dashboard/campusHappening')
          }}
        />
      </div>
      <Infra infrastructure={infrastructure} onSubmit={onSubmit} />
    </>
  );
};

export default CampusHappeningId;
