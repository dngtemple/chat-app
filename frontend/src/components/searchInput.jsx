import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function searchInput() {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='search_' className='input w-60 input-sm input-bordered rounded-full'/>
        <button type='submit' className='btn btn-sm btn-circle bg-sky-500 text-white'>
        <CiSearch />
        </button>
    </form>
  )
}
