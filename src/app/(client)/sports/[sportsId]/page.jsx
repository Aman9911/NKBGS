"use client";
import Container from "@/app/components/client/Container";
import Loader from "@/app/components/Loader";
import SportsTable from "@/app/components/SportsTable";
import sportService from "@/appwrite/appwriteSport";
import imageUploadService from "@/appwrite/imageUploadService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const SportsId = ({ params }) => {
  const id = params.sportsId;
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sport, setSport] = useState([]);
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
        <div className="flex flex-col items-center">
          <h1 className="md:text-4xl text-2xl my-2 font-bold text-indigo-600">
            {sport.sportName}
          </h1>
          <Image
            src={imageUploadService.getPreview(sport?.image).href}
            alt={sport.sportName}
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

export default SportsId;
