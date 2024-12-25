"use client";
import Button from "@/app/components/Button";
import React, { useEffect, useState } from "react";
import previousYearPaperService from "@/appwrite/appwritePreviousYearPaper";
import AddPaper from "@/app/components/AddPaper";
import PDFCard from "@/app/components/card/PDFCard";
import { useDispatch, useSelector } from "react-redux";
import { getPaper } from "@/store/previousPaperSlice";
import CascadingDropdown from "@/app/components/inputs/CascadingDropdown";

const PreviousYearPaperPage = () => {
  const [toggle, setToggle] = useState(false);
  const [previousPaper, setPreviousPaper] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedExam, setSelectedExam] = useState("");
  const [filterData,setFilterData]=useState([]);
  const prevPaper=useSelector((state)=>state.paper);
  const dispatch=useDispatch();

  const uniqueSession=prevPaper?.data?.filter((obj,index,self)=>index===self.findIndex((t)=>t.session===obj.session)).map((v)=>v.session)
  const uniqueClass=prevPaper?.data?.filter((obj,index,self)=>index===self.findIndex((t)=>t.class===obj.class)).map((v)=>v.class)
  const uniqueExamType=prevPaper?.data?.filter((obj,index,self)=>index===self.findIndex((t)=>t.examType===obj.examType)).map((v)=>v.examType)

  useEffect(()=>{
    setFilterData(prevPaper?.data)
  },[prevPaper])
  
  useEffect(()=>{
    previousYearPaperService.getPreviousYearPaper().then((paper)=>{
      if(paper){
        setPreviousPaper(paper.documents)
        dispatch(getPaper(paper.documents))
      }
    })
  },[dispatch])

  const handleSessionChange = (e) => {
    setSelectedSession(e.target.value)
    filterAndSetData(e.target.value,selectedClass,selectedExam)
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value)
    filterAndSetData(selectedSession,e.target.value,selectedExam)
  };

  const handleExamChange = (e) => {
    setSelectedExam(e.target.value)
    filterAndSetData(selectedSession,selectedClass,e.target.value)
  };

  const filterAndSetData=(session, classValue, exam)=>{
    let filteredData = prevPaper?.data;
    if (session) {
      filteredData = filteredData.filter(item => item.session === session);
    }
    if (classValue) {
      filteredData = filteredData.filter(item => item.class === classValue);
    }
    if (exam) {
      filteredData = filteredData.filter(item => item.examType === exam);
    }
    setFilterData(filteredData);
  }

  const handleReset=()=>{
    setSelectedClass("")
    setSelectedSession("")
    setSelectedExam("")
    filterAndSetData("","","")
  }

  return (
    <>
      <div className="text-right">
        <Button
          label={toggle ? "Cancel" : "Add new"}
          small
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>      
      {toggle ? <AddPaper setPreviousPaper={setPreviousPaper} previousPaper={previousPaper} /> :
        (<><div className="flex flex-row pt-2">
          <CascadingDropdown label="Session" options={uniqueSession} handleCategoryChange={handleSessionChange}/>
          <CascadingDropdown label="Class" options={uniqueClass} handleCategoryChange={handleClassChange}/>
          <CascadingDropdown label="Exam" options={uniqueExamType} handleCategoryChange={handleExamChange}/>
          <div className="text-right md:w-3/4">
            <Button
              label="Reset"
              small
              classname="bg-red-600 border-red-600"
              onClick={handleReset}
            />
          </div>
          </div>
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {filterData?.map((paper)=>(
          <div key={paper.$id}>
          <PDFCard key={paper.$id} data={paper} setPreviousPaper={setPreviousPaper} previousPaper={previousPaper}/>
          </div>
        ))}
      </div></>)}
    </>
  );
};

export default PreviousYearPaperPage;
