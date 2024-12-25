"use client"
import Infra from '@/app/components/Infra'
import nationalAndInternationalService from '@/appwrite/appwriteNationalAndInternational'
import imageUploadService from '@/appwrite/imageUploadService'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const NationalAndInternationalId = ({params}) => {
  const [infrastructure, setInfrastructure] = useState(null);
  const id=params.nationalAndInternationalId
  const router = useRouter()

  useEffect( () => {
    nationalAndInternationalService.getNationalAndInternationalById(id).then((infraData)=>{
      if (infraData) {
        setInfrastructure(infraData);
      }
    });
  }, []);

  const onSubmit = async(data) => {
    const thumbnail = data.thumbnail instanceof File ? await imageUploadService.uploadFile(data.thumbnail) : data?.thumbnail;
    if (thumbnail){
      await nationalAndInternationalService.updateNationalAndInternational(id,{...data,thumbnail:thumbnail.$id})
      toast.success("Data uploaded successfully",{position:"top-right"})      
      router.push('/admin/dashboard/nationalAndInternationalDays')
    }
  };

  return (
    <div>
      <Infra infrastructure={infrastructure} onSubmit={onSubmit}/>
    </div>
  )
}

export default NationalAndInternationalId