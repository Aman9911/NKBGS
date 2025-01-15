"use client";
import BackgroundWithData from "@/app/components/client/BackgroundWithData";
import Container from "@/app/components/client/Container";
import workshopByPrincipalService from "@/appwrite/appwriteWorkshopByPrincipal";
import React, { useEffect, useState } from "react";

const WorkshopByPrincipal = () => {
  const [development, setDevelopment] = useState([]);
  useEffect(() => {
    try {
      workshopByPrincipalService.getWorkshopByPrincipal().then((data) => {
        if (data) {
          setDevelopment(data.documents.reverse());
        }
      });
    } catch (error) {
      console.error("Fail to get Teacher care : ", error);
      return error;
    }
  }, []);
  const content = (
    <>
      <p>
        Our principal, with years of experience and a vision for holistic
        education, leads these sessions to inspire and educate. The workshops
        cover a wide range of topics, such as:
      </p>
      <ul className="pl-6 pr-2 w-auto list-disc space-y-2">
        <li>
          <strong>Leadership Development :</strong> Encouraging students and
          teachers to become effective leaders in their fields.
        </li>
        <li>
          <strong>Effective Communication :</strong> Building skills for clear
          and confident expression.
        </li>
        <li>
          <strong>Mental Health and Well-being :</strong> Promoting strategies
          for mindfulness, stress management, and overall well-being.
        </li>
        <li>
          <strong>Innovative Teaching Practices :</strong> Equipping teachers
          with modern and creative methods to enhance classroom learning.
        </li>
        <li>
          <strong>Career Guidance :</strong> Preparing students for future
          opportunities with a focus on skill development and goal setting.
        </li>
      </ul>
    </>
  );
  return (
    <Container>
      <BackgroundWithData
        heading="Workshop by Principal"
        para1="At NKBGS, we are committed to creating an enriching educational environment where both students and teachers can thrive. One of the key initiatives that sets our school apart is the series of workshops conducted by our principal, Ms. Jaishree Nawani. These workshops are thoughtfully designed to address the evolving needs of our students, teachers, and school community."
        para2={content}
        para3="Through these workshops, the principal not only shares valuable insights but also fosters a sense of unity, motivation, and purpose among participants. Each session is carefully curated to ensure that attendees walk away with practical knowledge and renewed enthusiasm."
        para4="Explore the impactful workshops that have been a cornerstone of our school’s development and see how we strive to make a difference every day."
        development={development}
      />
    </Container>
  );
};

export default WorkshopByPrincipal;
