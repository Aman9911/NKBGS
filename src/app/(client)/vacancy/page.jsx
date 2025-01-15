"use client";
import Container from "@/app/components/client/Container";
import Loader from "@/app/components/Loader";
import VacancyCard from "@/app/components/VacancyCard";
import vacancyService from "@/appwrite/appwriteVacancy";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Vacancy = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    vacancyService.getVacancy().then((data) => {
      if (data) {
        setPosts(data.documents);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <div className="min-h-screen mt-4 flex flex-col gap-4 md:max-w-[90%]">
        <h1 className="text-center text-3xl font-bold text-indigo-600">
          Vacancy
        </h1>
        <div className="flex">
          <div>
            {posts.length !== 0 ? (
              posts.map((post) => <VacancyCard post={post} key={post.$id} />)
            ) : (
              <div className="flex flex-col text-center my-24">
                <p className="text-3xl text-orange-500 font-bold">Oops!</p>
                <p className="text-2xl text-orange-500 font-bold">
                  No jobs available at the moment.
                </p>
                <p className="text-xl text-green-500 font-bold ">
                  Check back soon!
                </p>
              </div>
            )}
            <p className="mt-10 ml-2">
              Interested candidates to mail their resume at{" "}
              <span className="text-blue-700 font-bold">
                nkbglobalschool@gmail.com
              </span>
            </p>
            <p className="text-cyan-700 cursor-pointer font-bold ml-2 mb-6">
              <a
                href="/images/JobApplication.pdf"
                download="JobApplication.pdf"
              >
                Click Here To Download Job Application Form
              </a>
            </p>
          </div>
          <Image
            src="/images/vacancy.png"
            alt="vacancy"
            width={1200}
            height={1200}
            className="w-[40%] hidden md:block"
          />
        </div>
      </div>
    </Container>
  );
};

export default Vacancy;
