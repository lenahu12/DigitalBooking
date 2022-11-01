import React, { useContext } from "react";
import Select from "react-select";
import "../../styles/SearchBar/searchBar.css";
import { CityContext } from "../../context/City/CityContext";

const Searchbar = () => {

  const {cities, setCitySearch} = useContext(CityContext) 

  const options = cities.data ? cities.data.map((city) => {
    return { label: `${city.name}, ${city.country}`, value: city.id };
  }) : null

  return (
    cities && (
      <Select
        className="searchbar__container"
        classNamePrefix="searchbar"
        placeholder="Buscar por ciudad"
        defaultValue=""
        options={options}
        onChange={(e) => {
          setCitySearch(e.value);
        }}
        />
    )
  );
};

export default Searchbar;
