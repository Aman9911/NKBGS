"use client";
import BackgroundWithData from "@/app/components/client/BackgroundWithData";
import Container from "@/app/components/client/Container";
import valueEducationService from "@/appwrite/appwriteValueEducation";
import React, { useEffect, useState } from "react";

const ValueEducation = () => {
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    try {
      valueEducationService.getValueEducation().then((data) => {
        if (data) {
          setDevelopment(data.documents.reverse());
        }
      });
    } catch (error) {
      console.error("Fail to get Teacher care : ", error);
      return error;
    }
  }, []);

  return (
    <Container>
      <BackgroundWithData
        heading="VALUE EDUCATION : AN INTEGRAL PART OF EDUCATION AT NKBGS"
        para1="N.K Bagrodia Global School in association with Ramakrishna Mission conducts The Awakened Citizen Program for classes VI-VIII every week during the Value Education period. Teachers from NKBGS, trained for the program conduct the sessions with the objective to spread awareness among the students about the importance of values in society and the need to nurture and uphold them. The interactive sessions conducted by teachers inculcates values such as harmony, peace, compassion and humility among students."
        para2="These classes help students to realize their hidden strength and to discover and manifest the infinite power that lie dormant within each individual."
        development={development}
      />
    </Container>
  );
};

export default ValueEducation;
