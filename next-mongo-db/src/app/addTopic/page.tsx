"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddTopic(){
  const [title ,setTile] = useState("")
  const [description,setDescription] = useState("")

const router = useRouter()

const handleSubmit = async(e:any)=>{
  e.preventDefault();

  if(!title || !description){
    alert("title and description are required")
  }


  try{
  const res =  await fetch ("http://localhost:3000/api/topics",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,
        description
      })
    })
    if(res.ok){
      router.refresh()
      setTimeout(() => {
       
        router.push("/"); // Navigate to "/"
      }, 100);
    }
    else{
      throw new Error ("Failrd to create a topic")
    }
  }

  catch(err  )
  {
    console.log(err)
  }
}

    return(
       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
        onChange={(e)=>{setTile(e.target.value)}}
        className="border border-slate-500 px-8 py-2"
        type="text"  placeholder="Topic Title"/>
          <input
          onChange={(e)=>{setDescription(e.target.value)}}
          className="border border-slate-500 px-8 py-2"
        type="text"  placeholder="Topic Title"/>

        <button 
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add Topic</button>
       </form>
    )
}