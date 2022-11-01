import React, { createContext, useState } from "react";

export const AddImagesContext = createContext();

export const AddImagesProvider = ({children}) => {

    const [images, setImages] = useState([]);

    return (
        <AddImagesContext.Provider value={{images, setImages}}>
            {children}
        </AddImagesContext.Provider>
    )
}