"use client"
import Container from '@/app/components/client/Container'
import teacherCareService from '@/appwrite/appwriteTeacherCare'
import pdfUploadService from '@/appwrite/pdfUploadService';

import React, { useEffect, useState } from 'react'

const TeacherCareAndDevelopment = () => {
  const [development,setDevelopment]=useState([])
  useEffect(()=>{
    try {
      teacherCareService.getTeacherCare().then((data)=>{
       if (data) {
         setDevelopment(data.documents.reverse())
       }
     }); 
     } catch (error) {
       console.error("Fail to get Teacher care : ",error);
       return error
     }
  },[]) 

  const handleFilePreview = async (id)=>{
    try {
      const fileDownload=await pdfUploadService.getFileDownload(id);
      const blob=await fetch(fileDownload.href).then(res=>res.blob())
      const url=URL.createObjectURL(blob)
      if(url){
        window.open(url)
      }
    } catch (error) {
      throw new Error("Sorry there is some issue in network",error)
    }
  }

  return (
    <Container>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/heroBanner/building.png')",backgroundAttachment:"fixed",backgroundSize:'cover' }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 md:p-8 text-gray-950">
      <div className='p-2 text-wrap bg-slate-100/50 rounded-md'>
        <h1 className='text-3xl text-center font-bold text-indigo-600'>Teacher Care And Development</h1>
        
        <p className='mt-2 '>
        At NKBGS, we understand that the growth of our students is intricately linked to the development of our teachers. Our commitment to teacher care and development is reflected in a robust framework of ongoing professional learning. We regularly organize workshops and seminars that cover a wide range of topics, from innovative teaching strategies to emotional intelligence in the classroom. These sessions not only equip our educators with the latest pedagogical tools but also foster a sense of community among them, encouraging collaboration and the sharing of best practices.
        </p>
        <p className='mt-2 '>
        Furthermore, we emphasize the importance of reflective practice, allowing teachers to assess their teaching methods and adapt to the diverse needs of their students. By providing opportunities for mentorship and peer feedback, we ensure that our educators feel supported in their journey of professional growth. Saturdays are dedicated to these development initiatives, creating a structured time for learning and reflection away from the demands of the regular school week.
        </p>
        <p className='my-2 '>Ultimately, NKBGS is dedicated to cultivating a culture of excellence, where both teachers and students thrive in an environment that values knowledge, creativity, and continuous improvement. This holistic approach not only enhances the quality of education but also nurtures passionate educators who are truly invested in the success and well-being of their students.</p>
        
      <div className='md:ml-2'>
      {development.map((data,index)=>(
        <div key={data.$id} className='table-row'>
          <p className='table-cell md:px-1'>{index+1}.</p>
          <p className='table-cell md:px-1'>{data.date.split("T")[0].split("-").reverse().join('-')}</p>
          <p className='table-cell md:px-1 text-blue-600 cursor-pointer' onClick={()=>handleFilePreview(data.link)}>{data.name.split(".")[0]}</p>
        </div>
      ))}
      </div>
      </div>
      </div>
    </div>
    </Container>
  )
}

export default TeacherCareAndDevelopment