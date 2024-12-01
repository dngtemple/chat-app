import React, { useEffect, useRef } from 'react'
import Mes from './mes'
import useGetMessages from '../hooks/useGetMessages'
import useListenMessages from '../hooks/useListenMessages';


export default function mes() {

  const {messages,loading}=useGetMessages();
  useListenMessages()

  const lastmessage=useRef();



  useEffect(function(){
    setTimeout(function(){
      lastmessage.current?.scrollIntoView({behaviour:"smooth"})
    },100)
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length>0 && messages.map((m)=>{
        return(
          <div key={m._id} ref={lastmessage}>
           <Mes  message={m}/>
          </div>
        )
      })}


      {loading?<div className="flex mt-52 w-full flex-col gap-4">
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-1/2"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>:""}

      {!loading && messages.length===0 &&(
        <p className='text-center text-sm text-white'>Send a message to start a conversation</p>
      )}

    </div>
  )
}
