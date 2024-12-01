import { useState } from "react";
import toast from 'react-hot-toast'
import useConversation from "../zustand/useConversation";


export default function useSendMessage() {

    const [loading,setLoading]=useState(false);

    const {messages,setMessages,selectedConversation}=useConversation();

    const SendMessage = async(message)=>{
        setLoading(true)

        try{

            const res= await fetch("api/messages/send/"+selectedConversation._id,{
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body:JSON.stringify({message})
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error);
            }

            setMessages([...messages,data])

        }
        catch(error){
            toast.error(error.message)
            

        }finally{
            setLoading(false)
        }


        
    }

    return {SendMessage,loading}
  
}
