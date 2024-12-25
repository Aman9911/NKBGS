"use client"
import Container from '@/app/components/client/Container'
import atlCornerService from '@/appwrite/appwriteAtlCorner';
import pdfUploadService from '@/appwrite/pdfUploadService';
import React, { useEffect, useState } from 'react'

const AtlCorner = () => {
  const [development,setDevelopment]=useState([])
  useEffect(()=>{
    try {
        atlCornerService.getAtlCorner().then((data)=>{
       if (data) {
         setDevelopment(data.documents.reverse())
       }
     }); 
     } catch (error) {
       console.error("Some error to fetch AtlCorner",error);
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
      <div className="relative z-10 md:p-8 ">
      <div className='p-2 text-wrap bg-slate-100/50 rounded-md'>
        <h1 className='text-3xl  text-center font-bold'>Atal Tinkering Lab(ATL)</h1>
        
        <p className='mt-2 '>
        The Atal Tinkering Labs at NKBGS serve as a platform for experiential learning, allowing students to translate theoretical knowledge into practical applications. By engaging in projects that interest them, students cultivate a sense of ownership over their learning. This hands-on approach nurtures curiosity and encourages them to experiment with new ideas, promoting an innovative mindset. From coding and electronics to mechanical design, the variety of activities available caters to diverse interests and skill levels, ensuring that every student can find their passion within the STEM fields.
        </p>
        <p className='mt-2 '>
        Moreover, the collaborative nature of the labs fosters teamwork and communication skills. Students often work in groups to brainstorm solutions and tackle challenges, learning to value different perspectives and skills. This collaborative environment not only builds friendships but also simulates real-world work dynamics, preparing students for future careers in various fields. Teachers play a crucial role as facilitators, guiding students while allowing them the freedom to explore and discover on their own.
        </p>
        <p className='mt-2'>
        The impact of ATL at NKBGS extends beyond the classroom. By hosting workshops, competitions, and community outreach programs, the lab encourages students to share their knowledge and skills with others. This outreach cultivates a spirit of community engagement and social responsibility, empowering students to contribute positively to society. As they innovate and create solutions to local problems, they develop a sense of purpose and confidence in their abilities, paving the way for their future endeavors.
        </p>
        <p className='my-2'>
        In summary, the Atal Tinkering Labs at NKBGS not only enhance the educational experience by providing essential skills in STEM but also foster a culture of innovation and collaboration. Through their various initiatives, these labs play a significant role in shaping the next generation of thinkers, creators, and leaders, ensuring that students are well-equipped to navigate an increasingly complex and technology-driven world.
        </p>
        
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

export default AtlCorner