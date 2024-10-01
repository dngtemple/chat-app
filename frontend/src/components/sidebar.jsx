import React from 'react'
import SearchInput from './searchInput.jsx'
import Conversations from './conversations.jsx'
import LoggedOut from './loggedOut.jsx'

export default function sidebar() {
  return (
    <div className='p-4 flex flex-col border-r border-slate-400'>
      <SearchInput/>
      <div className='px-3 divider'></div>
      <Conversations/>

      <LoggedOut/>


    </div>
  )
}
