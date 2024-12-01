import { useState } from "react"
import { useAuthContext } from "../context/authContext.jsx"
import toast from "react-hot-toast"



export const useLogout= ()=>{

    let [loading,setloading]=useState(false)

    const {setauthUser}=useAuthContext()
    
    const logout = async()=>{
        
        setloading(true);
        try {
            const res= await fetch("http://localhost:8000/api/auth/logout",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                }
            })

            const data=await res.json()
            console.log(data)

            if(data.success===true){
                localStorage.removeItem("chat-user");
                setauthUser(null)
                toast.success("You have been logged out")
            }
        
        } catch (error) {
            toast.error(error.message)

        }finally{
            setloading(false)
        }

    }

    return {loading,logout}
    
}