import React from 'react'

import useConversation from "../zustand/useConversation.js";
import {useSocketContext} from "../context/socketContext.jsx";

export default function conv( {conversation}) {

  const {selectedConversation,setSelectedConversation}=useConversation();

  const isSelected = selectedConversation?._id === conversation._id

  const {onlineusers}=useSocketContext();

  const isOnline=onlineusers.includes(conversation._id);


  // console.log(onlineusers,isOnline)

    return(
    <>
    <div className={`gap-2 flex items-center hover:bg-sky-300 rounded-sm cursor-pointer mt-2

      ${isSelected ? "bg-sky-300":""}
    `} onClick={function(){
      setSelectedConversation(conversation)
    }}>
        <div className={`avatar  ${isOnline?"online":""}`}>
            <div className='w-12 rounded-full'><img src={conversation.profilePic} /></div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex justify-between gap-3'>
                <p className='font-semibold'>{conversation.fullName}</p>
            </div>

        </div>
    </div>

    <div  className='divider  my-0 py-0 h-1'>

    </div>
    </>
  )
}
