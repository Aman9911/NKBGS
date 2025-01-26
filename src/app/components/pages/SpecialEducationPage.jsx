"use client";
import BackgroundWithData from "@/app/components/client/BackgroundWithData";
import Container from "@/app/components/client/Container";
import specialEducationService from "@/appwrite/appwriteSpecial Education";
import { useEffect, useState } from "react";

const SpecialEducationPage = () => {
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    try {
      specialEducationService.getSpecialEducation().then((data) => {
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
        heading="Special Education"
        para1="Special Education is aimed at catering to the special needs of the differently abled children. It helps students with special needs in a way that addresses individual differences in learning. Ideally this process involves uniquely planned and systematically monitored arrangements of teaching procedures, adapted equipment and materials, accessible settings and other such intervention measures designed to help learners with difficulties achieve a higher level of self-sufficiency and success in school and community at large. Common special needs include challenges with learning, communication, emotional and behavioral difficulties, physical disabilities etc."
        para2="The special educator prepares individualized educational programmes along with a team of parents, teachers and the counselor for every child observing closely strengths and weaknesses of each child."
        para3="Our school follows an inclusion scheme, as per the CBSE guidelines which incorporate Special Education within school settings so as to give children with special needs exposure to the mainstream gradually through carefully planned and monitored endeavors."
        para4="The purpose of Special Education is to empower children with learning difficulties and instill in them a better self-concept and an achievement motivation."
        development={development}
      />
    </Container>
  );
};

export default SpecialEducationPage;
