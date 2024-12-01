import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useLogout } from '../hooks/useLogout';

export default function loggedOut() {
  const {loading,logout}=useLogout()
  return (
    <div className='mt-auto'>

      {
        (!loading ?
          <CiLogout className='w-6 h-6 text-white'
           onClick={logout}
        />
        :
        <span className='loading loading-spinner'></span>

        )
      }
        
    </div>
  )
}
