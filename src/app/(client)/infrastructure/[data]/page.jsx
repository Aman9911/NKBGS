"use client"
import Container from '@/app/components/client/Container';
import InfrastructureFullPage from '@/app/components/client/Infrastructure/InfrastructureFullPage';
import Loader from '@/app/components/Loader';
import infrastructureService from '@/appwrite/appwriteInfrastructure';
import React, { useEffect, useState } from 'react'

const Data = ({params}) => {
    const id=params.data
    const [infrastructure, setInfrastructure] = useState([]);
    const [loading,setLoading]=useState(true);

  useEffect(()=>{
    infrastructureService.getInfrastructure().then((infra) => {
      if (infra) {
        setInfrastructure(infra.documents.find(value=>value.title==id.replace("_",' ')));
       setLoading(false) 
      }
    });
  },[])
  
  if(loading){
    return <Loader/>
  }

  return (
    <Container>
      <InfrastructureFullPage heading={infrastructure.title} content={infrastructure.editorContent} pic={infrastructure.thumbnail}/>
    </Container>
  )
}

export default Data