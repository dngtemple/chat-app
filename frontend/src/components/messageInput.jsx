import React from 'react'
import { IoIosSend } from "react-icons/io";

export default function messageInput() {
  return (
    <form className='px-4 my-3'>
        <div  className='w-full relative'>
            <input type="text" placeholder='Type a message' className='border text-sm bg-slate-500 w-full p-2 text-white rounded-sm block'/>
            <button className='absolute flex end-0 items-center pe-3 inset-y-0'>
               <IoIosSend className='w-7 h-7 text-white'/>
            </button>
        </div>
    </form>
  )
}
