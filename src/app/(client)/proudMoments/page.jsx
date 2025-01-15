"use client";
import Container from "@/app/components/client/Container";
import ProudMomentModal from "@/app/components/client/modals/ProudMomentModal";
import ProudMomentCard from "@/app/components/client/ProudMomentCard";
import Loader from "@/app/components/Loader";
import proudMomentsService from "@/appwrite/appwriteProudMoments";
import React, { useEffect, useState } from "react";

const ProudMoments = () => {
  const [proud, setProud] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [clickData, setClickData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    proudMomentsService.getProudMoments().then((data) => {
      if (data) {
        setProud(data.documents.reverse());
        setIsLoading(false);
      }
    });
  }, []);
  const handleClick = (data) => {
    setClickData(data);
    setToggle(!toggle);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <ProudMomentModal
        toggle={toggle}
        setToggle={setToggle}
        clickData={clickData}
      />
      <div className="container">
        <h1 className="text-xl text-center uppercase sm:text-4xl font-semibold text-indigo-600 mt-4">
          Proud Moments
        </h1>
        <ProudMomentCard proud={proud} handleClick={handleClick} />
      </div>
    </Container>
  );
};

export default ProudMoments;
