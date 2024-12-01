import React, { useEffect } from 'react'
import Messages from './messages'
import MessageInput from './messageInput.jsx'
import { TiMessages } from "react-icons/ti";
import useConversation from '../zustand/useConversation.js';

export default function messageContainer() {
  // const noChat= true;
  const {selectedConversation,setSelectedConversation}=useConversation();


  useEffect(function(){
    
    // reset after logging out

    return(
      setSelectedConversation(null)
    )
  },[setSelectedConversation])


  return (
    <div className='md:min-w-[750px] flex flex-col'>

      {
        (!selectedConversation) ? <NoChatSelected/> :(
          <>
         <div className='bg-slate-300 px-4 py-2 mb-2'>
           <span className='label-text'>To:</span>{" "}
           <span className='font-bold'>{selectedConversation.fullName}</span>
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
