import React, { createContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";

export const UserContext = createContext();

export const UserProvider = ({children}) => {   
    const [userCredentials, setUserCredentials] = useState(localStorage.getItem("token"));
    const { decodedToken, isExpired } = useJwt(localStorage.getItem("token"));
    const [profile, setProfile] = useState({id:"", name:"", surname:"", email:""});

    useEffect(() => {
      if(decodedToken){
        const {id, email, name, surname} = decodedToken;      
        setProfile({id,email,name,surname})}
    }, [decodedToken]);

    return (
        <UserContext.Provider value={{...profile, userCredentials, setUserCredentials}}>
            {children}
        </UserContext.Provider>
    )
}