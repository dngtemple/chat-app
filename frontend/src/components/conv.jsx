import React from 'react'

export default function conv() {
  return (
    <>
    <div className='gap-2 flex items-center hover:bg-sky-300 rounded-sm cursor-pointer mt-2'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'><img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /></div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex justify-between gap-3'>
                <p className='font-semibold'>Clinton</p>
                <span className='text-xl'>😀</span>
            </div>

        </div>
    </div>

    <div  className='divider  my-0 py-0 h-1'>

    </div>
    </>
  )
}
