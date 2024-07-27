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
    <div className='bg-gray-500 text-white p-4'>
      Github followers: {data.followers}
      <img src={data.avatar_url}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rajx7722')
    return response.json()
}
