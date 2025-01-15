"use client";
import React, { useEffect, useState } from "react";
import Container from "@/app/components/client/Container";
import SportCard from "@/app/components/SportCard";
import Loader from "@/app/components/Loader";
import clubService from "@/appwrite/appwriteClub";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    clubService.getClub().then((data) => {
      setClubs(data.documents);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <h1 className="md:text-4xl text-2xl mt-2 font-bold text-indigo-600">
        Clubs
      </h1>
      <div className="pt-8 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {clubs.map((club) => (
          <SportCard
            key={club.$id}
            id={club.$id}
            image={club.image}
            title={club.clubName}
            path={"/clubs"}
          />
        ))}
      </div>
    </Container>
  );
};
export default Clubs;
