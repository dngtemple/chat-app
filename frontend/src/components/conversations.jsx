import React from 'react'
import Conv from './conv.jsx'

export default function conversations() {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
        <Conv/>
        <Conv/>
        <Conv/>

    </div>
  )
}
