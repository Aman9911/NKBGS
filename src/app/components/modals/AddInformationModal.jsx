"use client";
import { memo } from "react";
import Modal from "./Modal";
import { Controller, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "../Button";
import ImageUpload from "../inputs/ImageUpload";

const AddInformationModal = ({ toggle, setToggle, addInformation }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onClose = () => {
    reset();
    setToggle(false);
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 px-4 w-full">
      <Input
        id="date"
        label="Date"
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="competitionName"
        label="Name of the Competition"
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Controller
        name="details"
        control={control}
        render={({ field: { onChange } }) => (
          <ImageUpload onChange={onChange} />
        )}
      />
      <div className="pb-3 flex flex-row gap-4 items-center justify-center">
        <Button
          label="Submit"
          type="submit"
          onClick={handleSubmit(addInformation)}
        />
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

export default memo(AddInformationModal);
