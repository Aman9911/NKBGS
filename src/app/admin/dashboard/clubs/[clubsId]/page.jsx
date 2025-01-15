"use client";
import Button from "@/app/components/Button";
import ClubForm from "@/app/components/ClubForm";
import clubService from "@/appwrite/appwriteClub";
import imageUploadService from "@/appwrite/imageUploadService";
import pdfUploadService from "@/appwrite/pdfUploadService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ClubsId = ({ params }) => {
  const id = params.clubsId;
  const [info, setInfo] = useState([]);
  const [club, setClub] = useState([]);
  const router = useRouter();
  useEffect(() => {
    clubService.getClubById(id).then(async (data) => {
      if (data) {
        setClub(data);
        const clubDetail = await Promise.all(
          data.clubDetailLink.map(async (club) => {
            const detail = await clubService.getClubDetailById(club);
            return detail;
          })
        );
        setInfo(clubDetail);
      }
    });
  }, [id]);
  const onSubmit = async (data) => {
    if (data) {
      const image =
        data.image instanceof File
          ? await imageUploadService.uploadFile(data.image)
          : data.image;
      const clubDetailLink = await Promise.all(
        info.map(async (item) => {
          const details =
            item.details instanceof File
              ? await pdfUploadService.uploadFile(item.details)
              : item.details;
          if (details && details.$id) {
            const clubDetail = await clubService.createClubDetail({
              ...item,
              details: details.$id,
            });
            return clubDetail.$id;
          } else {
            const clubDetail = await clubService.updateClubDetail(item.$id, {
              ...item,
              details,
            });
            return clubDetail.$id;
          }
        })
      );
      if (image && clubDetailLink) {
        await clubService.updateClub(id, {
          ...data,
          image: image.$id || image,
          clubDetailLink,
        });
      }
      toast.success("Data uploaded successfully....", {
        position: "top-right",
      });
      router.push("/admin/dashboard/clubs");
    }
  };
  return (
    <>
      <div className="text-right">
        <Button
          label="Cancel"
          small
          onClick={() => {
            router.push("/admin/dashboard/clubs");
          }}
        />
      </div>
      <ClubForm onSubmit={onSubmit} info={info} setInfo={setInfo} club={club} />
    </>
  );
};

export default ClubsId;
