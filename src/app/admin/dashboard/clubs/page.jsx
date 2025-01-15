"use client";
import Button from "@/app/components/Button";
import ClubForm from "@/app/components/ClubForm";
import SportCard from "@/app/components/SportCard";
import clubService from "@/appwrite/appwriteClub";
import imageUploadService from "@/appwrite/imageUploadService";
import pdfUploadService from "@/appwrite/pdfUploadService";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Clubs = () => {
  const [change, setChange] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    clubService.getClub().then((data) => {
      if (data) {
        setClubs(data.documents.reverse());
      }
    });
  }, []);
  const onSubmit = async (data) => {
    if (data) {
      const image = await imageUploadService.uploadFile(data.image);
      const clubDetailLink = await Promise.all(
        info.map(async (item) => {
          const details = await pdfUploadService.uploadFile(item.details);
          if (details) {
            const clubDetail = await clubService.createClubDetail({
              ...item,
              details: details.$id,
            });
            return clubDetail.$id;
          }
        })
      );

      if (image && clubDetailLink) {
        const res = await clubService.createClub({
          ...data,
          image: image.$id,
          clubDetailLink,
        });
        setClubs((prev) => [...prev, res]);
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
      const deletedData = clubs.find((club) => club.$id === id);
      await imageUploadService.deleteFile(deletedData.image);
      const response = await Promise.all(
        deletedData.clubDetailLink.map(async (data) => {
          clubService.getClubDetailById(data).then(async (item) => {
            if (item) {
              await pdfUploadService.deleteFile(item.details);
            }
          });
          const res = await clubService.deleteClubDetail(data);
          return res;
        })
      );
      if (response) {
        await clubService.deleteClub(id);
        setClubs(clubs.filter((club) => club.$id !== id));
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
        <ClubForm onSubmit={onSubmit} info={info} setInfo={setInfo} />
      ) : (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {clubs.map((infra) => (
            <SportCard
              key={infra.$id}
              id={infra.$id}
              image={infra.image}
              title={infra.clubName}
              handleOnDelete={handleOnDelete}
              path={"/admin/dashboard/clubs"}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Clubs;
