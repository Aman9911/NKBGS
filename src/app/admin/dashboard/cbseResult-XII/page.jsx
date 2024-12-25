"use client";
import React, { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import ResultTable from "@/app/components/ResultTable";
import CbseResultFormXII from "@/app/components/CbseResultFormXII";

const CbseResultXIIPage = () => {
  const [result, setResult] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    cbseResultClassXService.getCbseResultClassXII().then((result) => {
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
        <CbseResultFormXII />
      ) : (
        <ResultTable
          result={result}
          path={"/admin/dashboard/cbseResult-XII/"}
        />
      )}
    </>
  );
};

export default CbseResultXIIPage;
