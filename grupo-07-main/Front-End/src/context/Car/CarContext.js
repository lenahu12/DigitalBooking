import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({children}) => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const getCars = async () => {
            try {
                const carsJSON = await axios.get(`http://54.176.81.27:8080/autos/`);
                setCars(carsJSON);
            } catch (error) {
                console.log(error);
            }
        };
        getCars();
    }, []);
    
    const resetCars = () => {
        const reset = async () => {
            try {
                const carsJSON = await axios.get(`http://54.176.81.27:8080/autos/`);
                setCars(carsJSON)
            } catch (error) {
                console.log(error);
            }
        }
        reset();
    }


    return (
        <CarContext.Provider value={{cars, setCars, resetCars}}>
            {children}
        </CarContext.Provider>
    )
}

