import React from 'react'
import {useAuthContext} from "../context/authContext.jsx"
import useConversation from '../zustand/useConversation.js';

export default function mes({message}) {

  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const fromMe = message?.senderId === authUser?.id;
  const chatClass = fromMe? `chat-end`: `chat-start` 
  const profilePic = fromMe? authUser?.profile:selectedConversation?.profilePic;
  const bubbleColor= fromMe? "bg-black text-white":""

  const formattedDate=extractHoursAndMinutes(message.createdAt);





  function extractHoursAndMinutes(isoString) {
    // Convert the ISO string to a JavaScript Date object
    const date = new Date(isoString);
  
    // Extract hours and minutes
    const hours = date.getHours().toString().padStart(2, "0"); // Ensures 2-digit format
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Ensures 2-digit format
  
    // Return the result
    return `${hours}:${minutes}`;
  }
  


  return (
    <div className={`chat ${chatClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic}/>
            </div>
        </div>

        <div className={`chat-bubble text-white bg-blue-400 ${bubbleColor}`}>{message.message}</div>
        <div className='chat-footer text-white opacity-50 flex items-center gap-1 text-xs'>{formattedDate}</div>
    </div>
  )
}
