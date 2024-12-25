"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import CbseResultForm from "@/app/components/CbseResultForm";
import ResultTable from "@/app/components/ResultTable";

const CbseResultXPage = () => {
  const [result, setResult] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    cbseResultClassXService.getCbseResultClassX().then((result) => {
      if (result) {
        setResult(result.documents);
      }
    });
  }, []);

  return (
    <>
      <div className="text-right mb-2">
        <Button
          label={toggle ? "Cancel" : "Add new"}
          small
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {toggle ? (
        <CbseResultForm />
      ) : (
        <ResultTable result={result} path={"/admin/dashboard/cbseResult-X/"} />
      )}
    </>
  );
};

export default CbseResultXPage;
