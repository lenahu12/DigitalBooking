import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {

    const [categories, setCategories] = useState([]);
    const [categorySearch, setCategorySearch] = useState(null);


    useEffect(() => {
      const getCategories = async () => {
        try {
          const categoriesJSON = await axios.get(`http://54.176.81.27:8080/categorias/`);
          setCategories(categoriesJSON);
        } catch (error) {
          console.log(error);
        }
      };

      getCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{categories, setCategories, categorySearch, setCategorySearch}}>
            {children}
        </CategoryContext.Provider>
    )
}