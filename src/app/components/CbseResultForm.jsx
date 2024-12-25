import React, { useEffect, useState } from "react";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import Table from "@/app/components/Table";
import SchoolToppersModal from "./modals/SchoolToppersModal";
import SchoolAchieversModal from "./modals/SchoolAchieversModal";
import SchoolSubjectWiseModal from "./modals/SchoolSubjectWiseModal";
import SchoolNinetyModal from "./modals/SchoolNinetyModal";
import { useForm } from "react-hook-form";
import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import imageUploadService from "@/appwrite/imageUploadService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CbseResultForm = ({ cbse }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: { heading: "", heading2: "", heading3: "", heading4: "" },
  });
  const [cbseData, setCbseData] = useState({
    toppers: [],
    achievers: [],
    ninetys: [],
    subjectWises: [],
  });
  const [session, setSession] = useState(null);
  const [modals, setModals] = useState({
    toppers: false,
    achievers: false,
    ninetys: false,
    subjectWises: false,
  });

  const toggleModal = (key) => {
    setModals((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCbseData = (key, d) => {
    setCbseData((prev) => ({ ...prev, [key]: [...prev[key], d] }));
  };

  const handleGetData = async (data, methodFun) => {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      const res = await methodFun(data[i]);
      if (res) {
        array.push(res);
      }
    }
    return array;
  };

  useEffect(() => {
    if (cbse) {
      handleGetData(
        cbse.topper,
        cbseResultClassXService.getTopperById.bind(cbseResultClassXService)
      ).then((data) => {
        setCbseData((prev) => ({ ...prev, toppers: data }));
      });
      handleGetData(
        cbse.achiever,
        cbseResultClassXService.getAchieverById.bind(cbseResultClassXService)
      ).then((data) => {
        setCbseData((prev) => ({ ...prev, achievers: data }));
      });
      handleGetData(
        cbse.ninety,
        cbseResultClassXService.getNinetyById.bind(cbseResultClassXService)
      ).then((data) => {
        setCbseData((prev) => ({ ...prev, ninetys: data }));
      });
      handleGetData(
        cbse.subjectWise,
        cbseResultClassXService.getSubjectWiseById.bind(cbseResultClassXService)
      ).then((data) => {
        setCbseData((prev) => ({ ...prev, subjectWises: data }));
      });
      setSession(cbse.session);
      setValue("heading", cbse.heading);
      setValue("heading2", cbse.heading2);
      setValue("heading3", cbse.heading3);
      setValue("heading4", cbse.heading4);
    } else {
      const currentYear = new Date().getFullYear();
      setSession(`${currentYear - 1}-${currentYear - 2000}`);
    }
  }, []);

  const handleSchoolTopper = (data) => {
    toggleCbseData("toppers", data);
    toggleModal("toppers");
  };

  const handleSchoolAchiever = (data) => {
    toggleCbseData("achievers", data);
    toggleModal("achievers");
  };

  const handleSchoolNinety = (data) => {
    toggleCbseData("ninetys", data);
    toggleModal("ninetys");
  };

  const handleSubjectWise = (data) => {
    toggleCbseData("subjectWises", data);
    toggleModal("subjectWises");
  };

  const handleFileUpload = async (data, methodFun) => {
    let array = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].photo) {
        const response = await imageUploadService.uploadFile(data[i].photo);
        if (response) {
          data[i].photo = response.$id;
        }
      }
      const res = await methodFun(data[i]);
      if (res) {
        array.push(res.$id);
      }
    }
    return array;
  };

  const onSubmit = async (data) => {
    const top = await handleFileUpload(
      cbseData.toppers,
      cbseResultClassXService.createTopper.bind(cbseResultClassXService)
    );
    const achiev = await handleFileUpload(
      cbseData.achievers,
      cbseResultClassXService.createAchiever.bind(cbseResultClassXService)
    );
    const nine = await handleFileUpload(
      cbseData.ninetys,
      cbseResultClassXService.createNinety.bind(cbseResultClassXService)
    );
    const sub = await handleFileUpload(
      cbseData.subjectWises,
      cbseResultClassXService.createSubjectWise.bind(cbseResultClassXService)
    );
    await cbseResultClassXService.createCbseResultClassX({
      ...data,
      session,
      topper: top,
      achiever: achiev,
      ninety: nine,
      subjectWise: sub,
    });
    toast.success("Data uploaded successfully", { position: "top-right" });
    reset();
    setCbseData({ toppers: [], achievers: [], ninetys: [], subjectWises: [] });
  };

  const handleUpdateWithId = async (data, methodFun, tag) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].$id) {
        await methodFun(data[i].$id, data[i]);
      } else {
        if (tag === "toppers") {
          const top = await handleFileUpload(
            [data[i]],
            cbseResultClassXService.createTopper.bind(cbseResultClassXService)
          );
          if (top) {
            cbseData.toppers[i].$id = top[0];
          }
        }
        if (tag === "achiever") {
          const achiev = await handleFileUpload(
            [data[i]],
            cbseResultClassXService.createAchiever.bind(cbseResultClassXService)
          );
          if (achiev) {
            cbseData.achievers[i].$id = achiev[0];
          }
        }
        if (tag === "ninety") {
          const nine = await handleFileUpload(
            [data[i]],
            cbseResultClassXService.createNinety.bind(cbseResultClassXService)
          );
          if (nine) {
            cbseData.ninetys[i].$id = nine[0];
          }
        }
        if (tag === "subjectWise") {
          const sub = await handleFileUpload(
            [data[i]],
            cbseResultClassXService.createSubjectWise.bind(
              cbseResultClassXService
            )
          );
          if (sub) {
            cbseData.subjectWises[i].$id = sub[0];
          }
        }
      }
    }
  };

  const onUpdate = async (data) => {
    await handleUpdateWithId(
      cbseData.toppers,
      cbseResultClassXService.updateTopper.bind(cbseResultClassXService),
      "toppers"
    );
    await handleUpdateWithId(
      cbseData.achievers,
      cbseResultClassXService.updateAchiever.bind(cbseResultClassXService),
      "achiever"
    );
    await handleUpdateWithId(
      cbseData.ninetys,
      cbseResultClassXService.updateNinety.bind(cbseResultClassXService),
      "ninety"
    );
    await handleUpdateWithId(
      cbseData.subjectWises,
      cbseResultClassXService.updateSubjectWise.bind(cbseResultClassXService),
      "subjectWise"
    );

    // only get toppers,achievers,subjectWises,ninetys $id in array
    const getDataId = Object.keys(cbseData).reduce((result, key) => {
      result[key] = cbseData[key].map((item) => item.$id);
      return result;
    }, {});

    // remove s form toppers,achievers...
    const removeLasts = Object.fromEntries(
      Object.entries(getDataId).map(([key, value]) => [
        key.endsWith("s") ? key.slice(0, -1) : key,
        value,
      ])
    );

    await cbseResultClassXService.updateCbseResultClassX(cbse.$id, {
      ...data,
      ...removeLasts,
    });
    router.push("/admin/dashboard/cbseResult-X");
    toast.success("Data uploaded successfully", { position: "top-right" });
  };

  const handleDelete = (data, tag) => {
    setCbseData((prev) => ({
      ...prev,
      [tag]: prev[tag].filter((item) => item !== data),
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        id="session"
        label="Session"
        errors={errors}
        register={register}
        defaultValue={session}
        disabled={true}
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="heading"
        label="Heading1"
        errors={errors}
        register={register}
        required
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
        id="heading3"
        label="Heading3"
        errors={errors}
        register={register}
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <Input
        id="heading4"
        label="Heading4"
        errors={errors}
        register={register}
        classname={"flex flex-col gap-8 mb-4 px-4"}
      />
      <SchoolToppersModal
        toggle={modals.toppers}
        setToggle={toggleModal}
        schoolTopper={handleSchoolTopper}
      />
      <div className="flex flex-row gap-2">
        <h1>School Toppers Details</h1>
        <Button
          label="Add"
          small
          classname={`w-auto p-4`}
          type="button"
          onClick={() => toggleModal("toppers")}
        />
      </div>
      {cbseData.toppers.length !== 0 && (
        <Table
          tHead={[
            "Name",
            "Heading1",
            "Heading2",
            "Percentage",
            "Photo",
            "Delete",
          ]}
          tData={cbseData.toppers}
          tag={"toppers"}
          handleDelete={handleDelete}
        />
      )}
      <SchoolAchieversModal
        toggle={modals.achievers}
        setToggle={toggleModal}
        schoolAchiever={handleSchoolAchiever}
      />
      <div className="flex flex-row gap-2">
        <h1>Perfect 100 Achievers Details</h1>
        <Button
          label="Add"
          small
          classname={`w-auto p-4`}
          type="button"
          onClick={() => toggleModal("achievers")}
        />
      </div>
      {cbseData.achievers.length !== 0 && (
        <Table
          tHead={[
            "Name",
            "Heading1",
            "Heading2",
            "Percentage",
            "Photo",
            "Delete",
          ]}
          tData={cbseData.achievers}
          tag={"achievers"}
          handleDelete={handleDelete}
        />
      )}
      <SchoolNinetyModal
        toggle={modals.ninetys}
        setToggle={toggleModal}
        ninety={handleSchoolNinety}
      />
      <div className="flex flex-row gap-2">
        <h1>Student Securing 90% and above Details</h1>
        <Button
          label="Add"
          small
          classname={`w-auto p-4`}
          type="button"
          onClick={() => toggleModal("ninetys")}
        />
      </div>
      {cbseData.ninetys.length !== 0 && (
        <Table
          tHead={["Roll no.", "Student Name", "Percentage", "Delete"]}
          tData={cbseData.ninetys}
          tag={"ninetys"}
          handleDelete={handleDelete}
        />
      )}
      <SchoolSubjectWiseModal
        toggle={modals.subjectWises}
        setToggle={toggleModal}
        subject={handleSubjectWise}
      />
      <div className="flex flex-row gap-2">
        <h1>Highest Marks Subject Wise Details</h1>
        <Button
          label="Add"
          small
          classname={`w-auto p-4`}
          type="button"
          onClick={() => toggleModal("subjectWises")}
        />
      </div>
      {cbseData.subjectWises.length !== 0 && (
        <Table
          tHead={[
            "Subject",
            "Roll no.",
            "Student Name",
            "Percentage",
            "Delete",
          ]}
          tData={cbseData.subjectWises}
          tag={"subjectWises"}
          handleDelete={handleDelete}
        />
      )}
      <div className="flex gap-6">
        {cbse ? (
          <Button
            label="Update"
            className="mt-4"
            onClick={handleSubmit(onUpdate)}
          />
        ) : (
          <Button
            label="Submit"
            type="submit"
            className="mt-4"
            onClick={handleSubmit(onSubmit)}
          />
        )}
        {cbse && (
          <Button
            label="Cancel"
            className="mt-4"
            onClick={() => router.push(`/admin/dashboard/cbseResult-X`)}
          />
        )}
      </div>
    </div>
  );
};

export default CbseResultForm;
