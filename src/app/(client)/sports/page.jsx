"use client"
import React, { useEffect, useState } from 'react'
import Container from '@/app/components/client/Container'
import sportService from '@/appwrite/appwriteSport'
import SportCard from '@/app/components/SportCard'
import Loader from '@/app/components/Loader'

const Sports = () => {
    const [sports,setSports]=useState([])
    const [loading,setLoading]=useState(true)
  useEffect(()=>{
    sportService.getSport().then((data)=>{
        setSports(data.documents)
        setLoading(false)
    })
  },[])

  if(loading){
    return <Loader/>
  }
    return (
    <Container>
        <h1 className='md:text-4xl text-2xl mt-2 font-bold text-indigo-600'>Sports</h1>
      <div className="pt-8 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {sports.map((sport)=>(
            <SportCard
            key={sport.$id}
            id={sport.$id}
            image={sport.image}
            title={sport.sportName}
            path={"/sports"}
          />
        ))}
        </div>
    </Container>
  )
}

export default Sports