import React, { useContext }from "react";
import Calendar from "../Global/Calendar";
import Searchbar from "../Home/Searchbar";
import "../../styles/Browser/browser.css"
import { CityContext } from "../../context/City/CityContext";
import { BrowserCalendarContext } from "../../context/BrowserCalendar/BrowserCalendarContext";
import axios from "axios";
import { CarContext } from "../../context/Car/CarContext";


const BrowserLayout = () => {

  const {citySearch, setCitySearch} = useContext(CityContext);
  const {startDateSearch, endDateSearch, setStartDateSearch, setEndDateSearch} = useContext(BrowserCalendarContext);
  const {setCars, resetCars} = useContext(CarContext);

  const handleOnClickDefaultData = () => {
    resetCars();
    setCitySearch("");
    setStartDateSearch("");
    setEndDateSearch("");
  }

  const handleOnClick = () => {
    
    const getBrowserFilteredData = async () => {

      let cityParam;
      let startDateParam;
      let endDateParam;

      citySearch ? cityParam = `&ciudad=${citySearch}` : cityParam = "";
      startDateSearch ? startDateParam = `&fechaIncio=${startDateSearch}` : startDateParam = ""; 
      endDateSearch ? endDateParam = `&fechaFin=${endDateSearch}` : endDateParam = "";

      const searchQuery = (`http://54.176.81.27:8080/autos/filtrar?${cityParam}${startDateParam}${endDateParam}`)


      try {
        const browserFilteredData = await axios.get(searchQuery);
        setCars(browserFilteredData)
      }
      catch (error) {
        console.log(error);
      }
    }
    getBrowserFilteredData();
  }
  
  return (
    <section>
      <div className="browser--container">
        <h1>Busca las ultimas ofertas en Autos</h1>
        <section className="browser--form-container">
          <Searchbar onClick={handleOnClickDefaultData}/>
          <Calendar className="dateResponsive" />
          <button className="primary-button browser--form-button" onClick={handleOnClick}>Buscar</button>
          {(citySearch || startDateSearch || endDateSearch) && <i className="fa-thin fa-x browser--x-button" onClick={handleOnClickDefaultData}></i>}
        </section>
      </div>
    </section>
  );
};

export default BrowserLayout;
