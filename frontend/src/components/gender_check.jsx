import React from 'react'

export default function Gender (props) {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-1 cursor-pointer ${props.selectedGender==="male"?"selected":""}`}>
                <span className='label-text text-white'>Male</span>
                <input checked={props.selectedGender==="male"} onChange={function(){
                    props.oncheckboxchange("male")
                }} type="checkbox" className="checkbox checkbox-xs border-white" />
                
            </label>

        </div>

        <div className='form-control'>
            <label className={`label gap-1 cursor-pointer ${props.selectedGender==="female"?"selected":""}`}>
                <span className='label-text text-white'>Female</span>
                <input checked={props.selectedGender==="female"} onChange={()=>{
                    props.oncheckboxchange("female")
                }} type="checkbox" className="checkbox checkbox-xs border-white" />
            </label>

        </div>

    </div>
  )
}
