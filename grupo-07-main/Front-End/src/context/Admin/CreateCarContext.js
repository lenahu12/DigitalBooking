import React, { createContext, useState } from "react";

export const CreateCarContext = createContext();

export const CreateCarProvider = ({children}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState(null);
    const [location, setLocation] = useState("")

    return (
        <CreateCarContext.Provider value={{title, setTitle, description, setDescription, category, setCategory, city, setCity, location, setLocation}}>
            {children}
        </CreateCarContext.Provider>
    )
}