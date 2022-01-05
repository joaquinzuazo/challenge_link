import React, { createContext, useState, useEffect } from "react";
import { getToken, removeToken, setToken } from "../api/token";
import { getMeApi } from "../api/user";

export const AuthContext=createContext({
    auth:null,
    login:()=>null,
    logout:()=>null
})

export function AuthProvider(props){
    const {children}=props
    const [auth, setAuth]=useState(null)

    useEffect(()=>{
        async function token(){
            const token=getToken()
            if(token){
                const me=await getMeApi(token)
                setAuth({token,me})
            }else{
                setAuth(null)
            }
        }
        token()
    },[])

    const login=async(token)=>{
        setToken(token)
        const me=await getMeApi(token)
        setAuth({token,me})
    }

    const logout=()=>{
        if(auth){
            removeToken()
            setAuth(null)
        }
    }

    const value={
        login,
        auth,
        logout
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}