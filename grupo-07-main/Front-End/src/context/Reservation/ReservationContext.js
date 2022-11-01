import React, { createContext, useState } from "react";

export const ReservationContext = createContext();

export const ReservationProvider = ({children}) => {

    const [reservationAttempt, setReservationAttempt] = useState(false);

    return (
        <ReservationContext.Provider value={{reservationAttempt, setReservationAttempt}}>
            {children}
        </ReservationContext.Provider>
    )
}
