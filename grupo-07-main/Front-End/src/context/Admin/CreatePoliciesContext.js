import React, { createContext, useState } from "react";

export const CreatePoliciesContext = createContext();

export const CreatePoliciesProvider = ({children}) => {

    const [termsContent, setTermsContent] = useState("");
    const [safetyContent, setSafetyContent] = useState("");
    const [cancellationContent, setCancellationContent] = useState("");

    return (
        <CreatePoliciesContext.Provider value={{termsContent, setTermsContent, safetyContent, setSafetyContent, cancellationContent, setCancellationContent}}>
            {children}
        </CreatePoliciesContext.Provider>
    )
}