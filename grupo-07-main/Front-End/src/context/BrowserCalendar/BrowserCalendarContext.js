import React, { createContext, useState } from "react";

export const BrowserCalendarContext = createContext();

export const BrowserCalendarProvider = ({children}) => {

    const [startDateSearch, setStartDateSearch] = useState(null);
    const [endDateSearch, setEndDateSearch] = useState(null);

    return (
        <BrowserCalendarContext.Provider value={{startDateSearch, setStartDateSearch, endDateSearch, setEndDateSearch}}>
            {children}
        </BrowserCalendarContext.Provider>
    )
}