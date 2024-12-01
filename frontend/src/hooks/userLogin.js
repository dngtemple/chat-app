import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import toast from 'react-hot-toast'



export default  function userLogin() {
    let [loading,setloading]=useState(false)

    const {setauthUser}=useAuthContext()
    
    const login = async({username,password})=>{
        const success= HandleErrors({username,password})

        if(!success) return


        setloading(true);
        try {
            const res= await fetch("http://localhost:8000/api/auth/login",{
                method:"POST",
                credentials:'include',
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify({userName:username,password})
            })

            const data=await res.json()
            console.log(data)

            if(data.success===false){
                toast.error("Invalid username or password")
            }
            else{
                localStorage.setItem("chat-user",JSON.stringify(data));
                setauthUser(data);
                toast.success("Login successfull")
            }
            
        } catch (error) {
            toast.error(error.message)

        }finally{
            setloading(false)
        }
    }

    return {loading,login}
}


const HandleErrors= async ({username,password})=>{
    if( !username || !password){
        toast.error("Please fill in all the feilds 😀")
        return false;
    }
    return true;
}
