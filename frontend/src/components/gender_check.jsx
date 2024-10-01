import React from 'react'

export default function Gender () {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className='label gap-1 cursor-pointer'>
                <span className='label-text'>Male</span>
                <input type="checkbox" class="checkbox checkbox-xs" />
            </label>

        </div>

        <div className='form-control'>
            <label className='label gap-1 cursor-pointer'>
                <span className='label-text'>Female</span>
                <input type="checkbox" class="checkbox checkbox-xs" />
            </label>

        </div>

    </div>
  )
}
