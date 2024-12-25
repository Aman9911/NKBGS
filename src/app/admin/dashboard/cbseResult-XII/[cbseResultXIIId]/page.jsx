"use client";
import CbseResultFormXII from "@/app/components/CbseResultFormXII";
import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import React, { useEffect, useState } from "react";

const CbseResultXIIId = ({ params }) => {
  const [result, setResult] = useState(null);
  const id = params.cbseResultXIIId;

  useEffect(() => {
    cbseResultClassXService.getCbseResultClassXIIById(id).then((data) => {
      if (data) {
        setResult(data);
      }
    });
  }, [id]);

  return <>{result && <CbseResultFormXII cbse={result} />}</>;
};

export default CbseResultXIIId;
