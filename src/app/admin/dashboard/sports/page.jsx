"use client";
import Button from "@/app/components/Button";
import SportCard from "@/app/components/SportCard";
import SportsForm from "@/app/components/SportsForm";
import sportService from "@/appwrite/appwriteSport";
import imageUploadService from "@/appwrite/imageUploadService";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Sports = () => {
  const [change, setChange] = useState(false);
  const [sports, setSports] = useState([]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    sportService.getSport().then((data) => {
      if (data) {
        setSports(data.documents.reverse());
      }
    });
  }, []);
  const onSubmit = async (data) => {
    if (data) {
      const image = await imageUploadService.uploadFile(data.image);
      const sportDetailLink = await Promise.all(
        info.map(async (item) => {
          const details = await pdfUploadService.uploadFile(item.details);
          if (details) {
            const sportDetail = await sportService.createSportDetail({
              ...item,
              details: details.$id,
            });
            return sportDetail.$id;
          }
        })
      );
      if (image && sportDetailLink) {
        const res = await sportService.createSport({
          ...data,
          image: image.$id,
          sportDetailLink,
        });
        setSports((prev) => [...prev, res]);
      }
      setChange(!change);
      toast.success("Data uploaded successfully....", {
        position: "top-right",
      });
      setInfo([]);
    }
  };

  const handleOnDelete = async (id) => {
    if (id) {
      const deletedData = sports.find((sport) => sport.$id === id);
      await imageUploadService.deleteFile(deletedData.image);
      const response = await Promise.all(
        deletedData.sportDetailLink.map(async (data) => {
          sportService.getSportDetailById(data).then(async (item) => {
            if (item) {
              await pdfUploadService.deleteFile(item.details);
            }
          });
          const res = await sportService.deleteSportDetail(data);
          return res;
        })
      );
      if (response) {
        await sportService.deleteSport(id);
        setSports(sports.filter((sport) => sport.$id !== id));
        toast.success("Data deleted successfully", { position: "top-right" });
      }
    }
  };
  return (
    <>
      <div className="text-right">
        <Button
          label={change ? "Cancel" : "Add new"}
          small
          onClick={() => {
            setChange(!change);
          }}
        />
      </div>

      {change ? (
        <SportsForm onSubmit={onSubmit} info={info} setInfo={setInfo} />
      ) : (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {sports.map((infra) => (
            <SportCard
              key={infra.$id}
              id={infra.$id}
              image={infra.image}
              title={infra.sportName}
              handleOnDelete={handleOnDelete}
              path={"/admin/dashboard/sports"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Sports;
