"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import VacancyCard from "@/app/components/VacancyCard";
import vacancyService from "@/appwrite/appwriteVacancy";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Vacancy = () => {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    vacancyService.getVacancy().then((data) => {
      if (data) {
        setPosts(data.documents);
      }
    });
  }, []);
  const onSubmit = async (data) => {
    if (data) {
      const response = await vacancyService.createVacancy(data);
      if (response) {
        setPosts((prev) => [...prev, response]);
      }
      setToggle(false);
      reset();
      toast.success("Data uploaded successfully....", {
        position: "top-right",
      });
    }
  };
  const handleOnDelete = async (data) => {
    if (data) {
      vacancyService.deleteVacancy(data);
      setPosts(posts.filter((post) => post.$id !== data));
      toast.success("Image deleted successfully", { position: "top-right" });
    }
  };
  return (
    <div>
      <div className="text-right">
        <Button
          label={toggle ? "Cancel" : "Add new"}
          small
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {toggle ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-[50%]"
        >
          <Input
            id="post"
            label="Post"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <Input
            id="description"
            label="Description"
            errors={errors}
            register={register}
            required
            classname={"flex flex-col gap-8 mb-4 px-4"}
          />
          <div className="flex justify-center gap-4">
            <Button
              label="Submit"
              type="submit"
              classname="mb-2 border-indigo-600"
            />
            <Button
              label="Reset"
              type="reset"
              classname="mb-2 border-slate-700 bg-slate-700"
            />
          </div>
        </form>
      ) : (
        posts.map((post) => (
          <VacancyCard
            post={post}
            key={post.$id}
            handleOnDelete={handleOnDelete}
          />
        ))
      )}
    </div>
  );
};

export default Vacancy;
