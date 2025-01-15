"use client";
import React, { useEffect, useState } from "react";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button";
import Infra from "@/app/components/Infra";
import imageUploadService from "@/appwrite/imageUploadService";
import toast from "react-hot-toast";
import internationalVisitService from "@/appwrite/appwriteInternationalVisit";

const InternationalVisitPage = () => {
  const [infrastructure, setInfrastructure] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    internationalVisitService.getInternationalVisit().then((infra) => {
      if (infra) {
        setInfrastructure(infra.documents);
      }
    });
  }, []);

  const handleOnDelete = async (data) => {
    if (data) {
      const editorContent = data.editorContent;
      const regex =
        /https:\/\/cloud\.appwrite\.io\/v1\/storage\/buckets\/[a-z0-9]+\/files\/([a-z0-9]+)\//g;
      const matches = editorContent.matchAll(regex);
      const fileIds = Array.from(matches, (match) => match[1]);
      const res = await Promise.all(
        fileIds.map(async (file) => {
          await imageUploadService.deleteFile(file);
        })
      );
      if (res) {
        await imageUploadService.deleteFile(data.thumbnail);
        await internationalVisitService.deleteInternationalVisit(data.$id);
        toast.success("Data deleted successfully", { position: "top-right" });
        setInfrastructure(
          infrastructure.filter((excursion) => excursion.$id !== data.$id)
        );
      }
    }
  };

  const onSubmit = async (data) => {
    const thumbnail = data
      ? await imageUploadService.uploadFile(data.thumbnail)
      : null;
    if (thumbnail) {
      const res = await internationalVisitService.createInternationalVisit({
        ...data,
        thumbnail: thumbnail.$id,
      });
      toast.success("Data uploaded successfully", { position: "top-right" });
      setInfrastructure((prev) => [...prev, res]);
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
              path={"/admin/dashboard/internationalVisit"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default InternationalVisitPage;
