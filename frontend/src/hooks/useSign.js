import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext.jsx';

export default function useSign() {
    const [loading,setloading]=useState(false);

    const {setauthUser}=useAuthContext()

    const signUp = async({fullName,userName,confirmPassword,password,email,gender})=>{
        
        const success= HandleErrors({fullName,userName,confirmPassword,password,email,gender})

        if(!success) return

        setloading(true)

        try {
            const response = await fetch("api/auth/signup",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({fullName,userName,confirmPassword,password,email,gender})
            })

            const data = await response.json()
            console.log(data)

            if(data.success===true){
                localStorage.setItem("chat-user",JSON.stringify(data))
            setauthUser(data)

            toast.success("signup succesfull");
            }

            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setloading(false)
        }

    }


    return {loading,signUp}


}

const HandleErrors= async ({fullName,userName,confirmPassword,password,email,gender})=>{
    if(!fullName || !userName || !confirmPassword || !password || !email || !gender ){
        toast.error("Please fill in all the feilds 😀")
        return false
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }


    if(password.length < 6){
        toast.error("Password must be at least 6 characters")
        return false;
    }

    return true;

}

