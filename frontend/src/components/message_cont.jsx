import React from 'react'
import Messages from './messages'
import MessageInput from './messageInput.jsx'
import { TiMessages } from "react-icons/ti";

export default function messageContainer() {
  const noChat= true;

  return (
    <div className='md:min-w-[750px] flex flex-col'>

      {
        (noChat) ? <NoChatSelected/> :(
          <>
         <div className='bg-slate-300 px-4 py-2 mb-2'>
           <span className='label-text'>To:</span>{" "}
           <span className='font-bold'>Templeton Baah</span>
         </div>

        <Messages/>
        <MessageInput/> 
        </>
        )
      }

       
    </div>
  )
}

const NoChatSelected =()=>{
  return(
    <>
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-xl md:text-2xl text-gray-100 flex flex-col font-medium items-center gap-2'>
        <p>Welcome John</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl text-center md:text5xl'/>

      </div>

    </div>
    </>
  )
}
