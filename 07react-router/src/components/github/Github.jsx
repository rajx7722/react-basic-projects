import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
   /*  const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/rajx7722')
        .then(response => response.json())
        .then( data=> {
            console.log(data);
            setData(data)
        })
    }) */
  return (
    <div className='flex items-center w-81 bg-gray-500 text-white p-4'>
    <div className='flex-1 text-lg font-bold'>
      Github followers: {data.followers}
    </div>
    
    <div className='flex-auto ml-4'>
      <img src={data.avatar_url} className='w-16 h-16 rounded-full' alt="GitHub Avatar" />
    </div>
  </div>
  
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rajx7722')
    return response.json()
}
