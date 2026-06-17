
import React from 'react'

 async function page({params}){
        const {vegId} = await params;
  return (
    <h1>veg : {vegId}</h1>
  )
}

export default page