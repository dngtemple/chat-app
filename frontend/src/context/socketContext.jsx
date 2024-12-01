import {createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import {io} from "socket.io-client"

const SocketContext=createContext();

export const useSocketContext=()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider= ({children})=>{

    const [socket,setsocket]=useState(null);

    const [onlineusers,setonlineusers]=useState([]);
    const {authUser}=useAuthContext()

    console.log(authUser,onlineusers,socket)


    useEffect(function(){
        if(authUser){
            const socket=io("https://chat-app-cfsj.onrender.com",{
                query:{
                    userId:authUser.id
                }
            })

            setsocket(socket)
            socket.on("getOnlineUsers",(users)=>{
                console.log(users)
                setonlineusers(users)
            })

            return ()=>socket.close()
        }else{
            if(socket){
                socket.close()
                setsocket(null)
            }
        }
    },[authUser])

    return(
        <SocketContext.Provider value={{socket,onlineusers}}>
            {children}
        </SocketContext.Provider>
    )
}