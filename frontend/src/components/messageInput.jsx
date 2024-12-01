import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../hooks/useSendMessage';

export default function messageInput() {

  const [message,setmessage]=useState("")
  const {SendMessage,loading}=useSendMessage()


  const Handlesubmit = async(e)=>{
    e.preventDefault();

    if(!message){
      return
    }

    await SendMessage(message)

    setmessage("");

  }
  return (
    <form className='px-4 my-3' onSubmit={Handlesubmit}>
        <div  className='w-full relative'>
            <input onChange={function(e){
              setmessage(e.target.value);

            }} value={message} type="text" placeholder='Type a message' className='border text-sm bg-slate-500 w-full p-2 text-white rounded-sm block'/>
            <button className='absolute flex end-0 items-center pe-3 inset-y-0'>
               {/* <IoIosSend className='w-7 h-7 text-white'/> */}

               {loading? <div className='loading loading-spinner mx-auto'></div>:<IoIosSend className='w-7 h-7 text-white'/>}
            </button>
        </div>
    </form>
  )
}
