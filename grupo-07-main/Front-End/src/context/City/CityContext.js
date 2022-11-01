import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CityContext = createContext();

export const CityProvider = ({children}) => {

    const [cities, setCities] = useState([]);
    const [citySearch, setCitySearch] = useState(null);

    useEffect(() => {
      const getCities = async () => {
        try {
          const citiesJSON = await axios.get(`http://54.176.81.27:8080/ciudades/`);
          setCities(citiesJSON);
        } catch (error) {
          console.log(error);
        }
      };

      getCities();
    }, []);

    return (
        <CityContext.Provider value={{cities, setCities, citySearch, setCitySearch}}>
            {children}
        </CityContext.Provider>
    )
}