"use client";
import Container from "@/app/components/client/Container";
import Loader from "@/app/components/Loader";
import SportsTable from "@/app/components/SportsTable";
import clubService from "@/appwrite/appwriteClub";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ClubsId = ({ params }) => {
  const id = params.clubsId;
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [club, setClub] = useState([]);
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
        setLoading(false);
      }
    });
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <div className="container">
        <div className="flex flex-col items-center mb-2">
          <h1 className="md:text-4xl text-2xl my-2 font-bold text-indigo-600">
            {club.clubName}
          </h1>
          <Image
            src={imageUploadService.getPreview(club?.image).href}
            alt={club.clubName}
            width={1200}
            height={1200}
            className="md:w-2/4 aspect-video rounded-lg"
          />
        </div>
        {info.length !== 0 && <SportsTable info={info} />}
      </div>
    </Container>
  );
};

export default ClubsId;
