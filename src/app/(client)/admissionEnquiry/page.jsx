"use client";
import Button from "@/app/components/Button";
import Container from "@/app/components/client/Container";
import Input from "@/app/components/inputs/Input";
import RadioButton from "@/app/components/inputs/RadioButton";
import SelectBox from "@/app/components/inputs/SelectBox";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const classes = [
  { value: "", label: "Select an option" },
  { value: "Nursery", label: "Nursery" },
  { value: "KG", label: "KG" },
  { value: "I", label: "I" },
  { value: "II", label: "II" },
  { value: "III", label: "III" },
  { value: "IV", label: "IV" },
  { value: "V", label: "V" },
  { value: "VI", label: "VI" },
  { value: "VII", label: "VII" },
  { value: "VIII", label: "VIII" },
  { value: "IX", label: "IX" },
  { value: "X", label: "X" },
  { value: "XI", label: "XI" },
  { value: "XII", label: "XII" },
];

const AdmissionEnquiry = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/sendEnquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success(
          "Your message has been sent! We'll get back to you soon.",
          { position: "top-right" }
        );
        reset();
      } else {
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", {
        position: "top-right",
      });
    }
  };
  return (
    <Container>
      <div className="bg-purple-500 m-1 md:m-4 p-1 md:p-4 rounded-md shadow-lg">
        <h1 className="text-2xl text-center font-bold text-white my-2">
          Admission Enquiry
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Left */}
            <div className="flex flex-col gap-4">
              <Input
                id="studentName"
                label="Student's Name"
                errors={errors}
                register={register}
                required
              />
              <Input
                id="motherName"
                label="Mother's Name"
                errors={errors}
                register={register}
                required
              />
              <Input
                id="fatherName"
                label="Father's Name"
                errors={errors}
                register={register}
                required
              />
              <Input
                id="dob"
                label="Date of Birth"
                errors={errors}
                register={register}
                type="date"
              />
              <RadioButton
                name="Gender"
                id="gender"
                register={register}
                control={control}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />
              <SelectBox
                required
                errors={errors}
                options={classes}
                label={"Class to which admission is sought"}
                id="classAdmission"
                register={register}
                classname={"text-gray-950 font-normal"}
              />
              <RadioButton
                name="Transport"
                id="transport"
                register={register}
                control={control}
                options={[
                  { label: "Yes", value: "yes" },
                  { label: "No", value: "no" },
                ]}
              />
            </div>
            {/* Right */}
            <div className="flex flex-col gap-4">
              <Input
                id="address"
                label="Address"
                errors={errors}
                register={register}
              />
              <Input
                id="pinCode"
                label="Pin Code"
                errors={errors}
                register={register}
              />
              <Input
                id="mobile"
                label="Communication Mobile No."
                errors={errors}
                register={register}
                value={/^[7-9]\d{9}$/}
                message="Please enter valid mobile number"
                required
              />
              <Input
                id="email"
                label="E-mail"
                errors={errors}
                register={register}
                value={/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi}
                message="Please enter valid E-mail address"
                required
              />
              <Input
                id="lastSchoolName"
                label="Name of last school attended"
                errors={errors}
                register={register}
              />
              <Input
                id="comments"
                label="Any other comments"
                errors={errors}
                register={register}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              label={isSubmitting ? "Sending..." : "Submit"}
              type="submit"
              classname="mb-2 border-indigo-600"
            />
            <Button
              label="Reset"
              type="reset"
              classname="mb-2 border-slate-700 bg-slate-700 "
            />
          </div>
          {isSubmitSuccessful && (
            <p className="mt-1 text-center text-white ">
              Admission Enquiry sent successfully!
            </p>
          )}
        </form>
      </div>
    </Container>
  );
};

export default AdmissionEnquiry;
