"use client";
import CbseResultForm from "@/app/components/CbseResultForm";
import cbseResultClassXService from "@/appwrite/appwriteCbseResultClassX";
import React, { useEffect, useState } from "react";

const CbseResultXId = ({ params }) => {
  const [result, setResult] = useState(null);
  const id = params.cbseResultXId;
  
  useEffect(() => {
    cbseResultClassXService.getCbseResultClassXById(id).then((data) => {
      if (data) {
        setResult(data);
      }
    });
  }, []);

  return <>{result && <CbseResultForm cbse={result} />}</>;
};

export default CbseResultXId;
