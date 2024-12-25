"use client";
import { memo } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "../Button";

const SchoolSubjectWiseModal = ({ toggle, setToggle, subject }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onClose = () => {
    reset();
    setToggle("subjectWises");
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 px-4 w-full">
      <Input
        id="subject"
        label="Subject"
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="percentage"
        label="Percentage"
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="rollNo"
        label="Roll no."
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="studentName"
        label="Student Name"
        errors={errors}
        register={register}
        required
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <div className="pb-3 flex flex-row gap-4 items-center justify-center">
        <Button label="Submit" type="submit" onClick={handleSubmit(subject)} />
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

export default memo(SchoolSubjectWiseModal);
