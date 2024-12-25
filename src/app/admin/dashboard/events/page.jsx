"use client";
import Button from "@/app/components/Button";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import pdfUploadService from "@/appwrite/pdfUploadService";
import eventsService from "@/appwrite/appwriteEvents";
import { MdCancel } from "react-icons/md";

const AdminEvents = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [events, setEvents] = useState([]);
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    eventsService.getEvents().then((event) => {
      if (event) {
        setEvents(event.documents);
      }
    });
  }, []);

  const onSubmit = async (data) => {
    setIsDisabled(true);
    const file = data ? await pdfUploadService.uploadFile(data.file) : null;
    if (file) {
      await eventsService.createEvents({ ...data, file: file.$id });
      toast.success("Data uploaded successfully", { position: "top-right" });
      setToggle(!toggle);
    }
  };

  const handleDelete = (event) => {
    if (event) {
      pdfUploadService.deleteFile(event.file);
      eventsService.deleteEvents(event.$id);
      setEvents(events.filter((e) => e !== event));
      setToggle(false);
      toast.success("Event deleted successfully", { position: "top-right" });
    }
  };

  return (
    <>
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
        <div className="pt-12">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Input
              id="date"
              label="Date"
              errors={errors}
              register={register}
              required
              classname={"flex flex-col gap-8 mb-4 px-4"}
            />
            <Input
              id="title"
              label="Title"
              errors={errors}
              register={register}
              required
              classname={"flex flex-col gap-8 mb-4 px-4"}
            />
            <div className="mb-4">
              <label className="font-bold text-gray-800 text-2xl">
                Thumbnail{" "}
              </label>
              <Controller
                name="file"
                control={control}
                render={({ field: { onChange } }) => (
                  <ImageUpload onChange={onChange} />
                )}
              />
            </div>
            <Button
              label="Submit"
              disabled={isDisabled}
              type="submit"
              className="mt-4"
            />
          </form>
        </div>
      ) : (
        <div className="pt-4">
          {events.map((event) => (
            <div
              className=" w-fit shadow-2xl rounded-xl flex justify-start bg-indigo-600 mb-4 group"
              key={event.$id}
            >
              <h4 className="text-sm bg-slate-200 text-center px-4 py-2 m-1 rounded-xl leading-3 md:font-semibold md:text-base md:p-[2%] ">
                {event.date}
              </h4>
              <p className="text-left text-xs pt-2 px-1 md:p-[2%] md:text-base text-white ">
                {event.title}
              </p>
              <img
                src="/images/PDF.png"
                alt="list"
                className="h-10 cursor-pointer mt-2 md:ml-8 md:mt-4 hover:-translate-y-1 md:transition md:ease-in-out"
              />
              <div className="cursor-pointer top-3 right-3 text-zinc-800 w-fit h-fit hover:text-white hover:bg-black">
                <MdCancel
                  size={20}
                  onClick={() => handleDelete(event)}
                  className="hidden group-hover:block"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AdminEvents;
