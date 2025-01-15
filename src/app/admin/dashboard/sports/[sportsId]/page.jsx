"use client";
import Button from "@/app/components/Button";
import SportsForm from "@/app/components/SportsForm";
import sportService from "@/appwrite/appwriteSport";
import imageUploadService from "@/appwrite/imageUploadService";
import pdfUploadService from "@/appwrite/pdfUploadService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SportsId = ({ params }) => {
  const id = params.sportsId;
  const [info, setInfo] = useState([]);
  const [sport, setSport] = useState([]);
  const router = useRouter();
  useEffect(() => {
    sportService.getSportById(id).then(async (data) => {
      if (data) {
        setSport(data);
        const sportDetail = await Promise.all(
          data.sportDetailLink.map(async (sport) => {
            const detail = await sportService.getSportDetailById(sport);
            return detail;
          })
        );
        setInfo(sportDetail);
      }
    });
  }, [id]);
  const onSubmit = async (data) => {
    if (data) {
      const image =
        data.image instanceof File
          ? await imageUploadService.uploadFile(data.image)
          : data.image;
      const sportDetailLink = await Promise.all(
        info.map(async (item) => {
          const details =
            item.details instanceof File
              ? await pdfUploadService.uploadFile(item.details)
              : item.details;
          if (details && details.$id) {
            const sportDetail = await sportService.createSportDetail({
              ...item,
              details: details.$id,
            });
            return sportDetail.$id;
          } else {
            const sportDetail = await sportService.updateSportDetail(item.$id, {
              ...item,
              details,
            });
            return sportDetail.$id;
          }
        })
      );
      if (image && sportDetailLink) {
        await sportService.updateSport(id, {
          ...data,
          image: image.$id || image,
          sportDetailLink,
        });
      }
      toast.success("Data uploaded successfully....", {
        position: "top-right",
      });
      router.push("/admin/dashboard/sports");
    }
  };
  return (
    <>
      <div className="text-right">
        <Button
          label="Cancel"
          small
          onClick={() => {
            router.push("/admin/dashboard/sports");
          }}
        />
      </div>
      <SportsForm
        onSubmit={onSubmit}
        info={info}
        setInfo={setInfo}
        sport={sport}
      />
    </>
  );
};

export default SportsId;
