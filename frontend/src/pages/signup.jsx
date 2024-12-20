import React, { useState } from 'react'

import Gender from '../components/gender_check';
import useSign from "../hooks/useSign";
import { Link } from 'react-router-dom';

export default function signup() {

  const [inputs,setinputs]=useState({
    fullName:"",
    userName:"",
    confirmPassword:"",
    password:"",
    gender:"",
    email:""
  })

  const {loading,signUp}=useSign()


  const handleGender = (gender)=>{
    setinputs({...inputs,gender})

  }


  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signUp(inputs);

  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className=' p-5 h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-1'>
           <h1 className='text-center text-xl text-zinc-50'>SignUp {"  "}    
           <span className='text-xl text-red-500'> eChat</span>
           </h1>

           <form onSubmit={handleSubmit}> 
            <div>
            <label className="input input-sm input-bordered flex items-center gap-2 mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input value={inputs.fullName} onChange={function(e){
                  setinputs({...inputs,fullName:e.target.value})
                }} type="text" className="grow" placeholder="Full name" />
              </label>
            </div>

            <div>
            <label className="input input-sm input-bordered flex items-center gap-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input value={inputs.userName} onChange={function(e){
                  setinputs({...inputs,userName:e.target.value});
                }} type="text" className="grow" placeholder="Username" />
              </label>
            </div>

            <div>
            <label className="input input-sm input-bordered flex items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input value={inputs.email} onChange={function(e){
                setinputs({...inputs,email:e.target.value})
              }} type="text" className="grow" placeholder="Email" />
            </label>
            </div>

            <div>
            <label className="input input-sm input-bordered flex items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input value={inputs.password} onChange={function(e){
                setinputs({...inputs,password:e.target.value})
              }} type="password" className="grow" placeholder='Password' />
            </label>
            </div>

            <div>
            <label className="input input-sm input-bordered flex items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input value={inputs.confirmPassword} onChange={function(e){
                setinputs({...inputs,confirmPassword:e.target.value})
              }} type="password" className="grow" placeholder='Confirm password' />
            </label>
            </div>

            <Gender oncheckboxchange={handleGender} selectedGender={inputs.gender}/>


            <div>
            <Link to={"/login"} className='text-sm text-blue-600 underline hover-underline inline-block hover:text-slate-600 mt-2'>
               Already have an account?
            </Link>
            

            </div>

            <div>
              <button type='submit' className='btn btn-block mt-6 btn-sm'>{loading ? 'Creating account...' : 'Create account'}</button>
            </div>

            
           </form>
        </div>

    </div>
  )
}
