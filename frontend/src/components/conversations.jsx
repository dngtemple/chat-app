import React from 'react'
import Conv from './conv.jsx'
import useGetConversation from '../hooks/useGetConversation.js'

export default function conversations() {

  const {loading,conversation}=useGetConversation();
  console.log(conversation)
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {
        conversation.map(function(conv,index){
          return(
          <Conv key={conv._id} conversation={conv}/>
          )

        })
      }


      {loading? <span className='loading loading-spinner mx-auto'></span>:null}

    </div>
  )
}
