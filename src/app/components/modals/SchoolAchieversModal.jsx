"use client";
import { memo } from "react";
import Modal from "./Modal";
import { Controller, useForm } from "react-hook-form";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import Button from "../Button";

const SchoolAchieversModal = ({ toggle, setToggle, schoolAchiever }) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onClose = () => {
    reset();
    setToggle("achievers");
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 px-4 w-full">
      <Input
        id="name"
        label="Name"
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="heading1"
        label="Heading1"
        errors={errors}
        register={register}
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="heading2"
        label="Heading2"
        errors={errors}
        register={register}
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="percentage"
        label="Percentage"
        errors={errors}
        register={register}
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <div className="flex flex-row gap-6">
        <label className="font-bold text-gray-800 text-2xl">Photo</label>
        <Controller
          name="photo"
          control={control}
          render={({ field: { onChange } }) => (
            <ImageUpload onChange={onChange} />
          )}
        />
      </div>
      <div className="pb-3 flex flex-row gap-4 items-center justify-center">
        <Button label="Submit" type="submit" onClick={handleSubmit(schoolAchiever)} />
        <Button label="Cancel" type="cancel" onClick={onClose} />
      </div>
    </div>
  );

  return (
    <Modal
      disabled={false}
      isOpen={toggle}
      onClose={onClose}
      body={bodyContent}
    />
  );
};

export default memo(SchoolAchieversModal);
