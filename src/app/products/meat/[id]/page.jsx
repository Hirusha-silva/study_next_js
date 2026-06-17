
import React from 'react'

async function page({params})  {
    const {id} = await params;
  return (
    <h1>meat item : {id}</h1>
  )
}

export default page