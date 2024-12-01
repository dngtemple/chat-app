import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../zustand/useConversation';

import useGetConversation from "../hooks/useGetConversation.js"
import toast from 'react-hot-toast';
export default function searchInput() {


  const [search,setsearch]=useState("");
  const {setSelectedConversation}=useConversation;
  const {conversations}=useGetConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!search)return
    if(search.length<3){
      return toast.error("Search term must be at least 3 characters")
    }

    const conversation = conversations?.find((conv)=>{
        conv.fullName.toLowerCase().includes(search.toLowerCase())

    })

    console.log(conversation)

    if(conversation){
      setSelectedConversation(conversation);
      setsearch("")
    }
    else{
      return toast.error("No user found")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input onChange={function(e){
          setsearch(e.target.value)
        }} value={search} type='text' placeholder='search_' className='input w-60 input-sm input-bordered rounded-full'/>
        <button type='submit' className='btn btn-sm btn-circle bg-sky-500 text-white'>
        <CiSearch />
        </button>
    </form>
  )
}
