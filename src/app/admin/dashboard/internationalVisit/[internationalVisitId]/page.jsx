"use client";
import Button from "@/app/components/Button";
import Infra from "@/app/components/Infra";
import internationalVisitService from "@/appwrite/appwriteInternationalVisit";
import imageUploadService from "@/appwrite/imageUploadService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const InternationalVisitId = ({ params }) => {
  const [infrastructure, setInfrastructure] = useState(null);
  const id = params.internationalVisitId;
  const router = useRouter();

  useEffect(() => {
    internationalVisitService
      .getInternationalVisitById(id)
      .then((infraData) => {
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
      await internationalVisitService.updateInternationalVisit(id, {
        ...data,
        thumbnail: thumbnail.$id,
      });
      toast.success("Data uploaded successfully", { position: "top-right" });
      router.push("/admin/dashboard/internationalVisit");
    }
  };
  return (
    <>
      <div className="text-right">
        <Button
          label="Cancel"
          small
          onClick={() => {
            router.push("/admin/dashboard/internationalVisit");
          }}
        />
      </div>
      <Infra infrastructure={infrastructure} onSubmit={onSubmit} />
    </>
  );
};

export default InternationalVisitId;
