import React from 'react'
import Sidebar from '../components/sidebar.jsx';
import MessageContainer from '../components/message_cont.jsx';

export default function home() {
  return (
    <div className='p-5 flex sm:h-[450px] md:h-[550px] h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <Sidebar/>
      <MessageContainer/>
      
    </div>
  )
}
