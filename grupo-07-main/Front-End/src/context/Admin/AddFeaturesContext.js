import React, { createContext, useState } from "react";

export const AddFeaturesContext = createContext();

export const AddFeaturesProvider = ({children}) => {

    const [features, setFeatures] = useState([]);

    return (
        <AddFeaturesContext.Provider value={{features, setFeatures}}>
            {children}
        </AddFeaturesContext.Provider>
    )
}