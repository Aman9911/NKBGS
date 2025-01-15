import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import Input from "@/app/components/inputs/Input";
import SportsTable from "./SportsTable";
import AddClubModal from "./modals/AddClubModal";

const ClubForm = ({ onSubmit, info, setInfo, club }) => {
  const [toggle, setToggle] = useState(false);
  const addInformation = (data) => {
    setInfo((prev) => [...prev, data]);
    setToggle(false);
  };
  useEffect(() => {
    setValue("clubName", club?.clubName);
    setValue("image", club?.image);
  }, [club]);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    setValue,
  } = useForm();

  return (
    <>
      <AddClubModal
        toggle={toggle}
        setToggle={setToggle}
        addInformation={addInformation}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 w-[50%] items-center">
          <Input
            id="clubName"
            label="Club name"
            errors={errors}
            register={register}
            required
            classname={""}
          />
          <div className="flex gap-6">
            <label className="text-xl font-bold">Thumbnail</label>
            <Controller
              name="image"
              control={control}
              render={({ field: { onChange } }) => (
                <ImageUpload onChange={onChange} />
              )}
            />
          </div>

          <Button
            label="Add Information"
            classname="mb-2 whitespace-nowrap w-fit p-2 bg-orange-600 border-orange-600"
            onClick={() => setToggle(true)}
          />
        </div>
        {info.length !== 0 && (
          <div>
            <SportsTable info={info} setInfo={setInfo} />
          </div>
        )}
        <div className="flex justify-center gap-4">
          <Button
            label={club ? "Update" : "Submit"}
            type="submit"
            classname="mb-2 border-indigo-600"
            disabled={isSubmitting}
          />
          <Button
            label="Reset"
            type="reset"
            classname="mb-2 border-slate-700 bg-slate-700"
          />
        </div>
      </form>
    </>
  );
};

export default ClubForm;
