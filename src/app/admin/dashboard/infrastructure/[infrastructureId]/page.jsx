"use client"
import Infra from '@/app/components/Infra'
import infrastructureService from '@/appwrite/appwriteInfrastructure'
import imageUploadService from '@/appwrite/imageUploadService'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const infrastructureId = ({params}) => {
  const [infrastructure, setInfrastructure] = useState(null);
  const [isDisabled,setIsDisabled]=useState(false)
  const id=params.infrastructureId
  const router = useRouter()

  useEffect( () => {
     infrastructureService.getInfrastructureById(id).then((infraData) => {
      if (infraData) {
        setInfrastructure(infraData);
      }
    });
  }, []);

  const onSubmit = async(data) => {
    setIsDisabled(true)
    const thumbnail = data.thumbnail instanceof File ? await imageUploadService.uploadFile(data.thumbnail) : data?.thumbnail;
    if (thumbnail){
      await infrastructureService.updateInfrastructure(id,{...data,thumbnail:thumbnail.$id})
      toast.success("Data uploaded successfully",{position:"top-right"})      
      router.push('/admin/dashboard/infrastructure')
    }
  };

  return (
    <div>
      <Infra infrastructure={infrastructure} onSubmit={onSubmit} isDisabled={isDisabled}/>
    </div>
  )
}

export default infrastructureId