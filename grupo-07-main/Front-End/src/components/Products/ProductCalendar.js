import React, { useContext } from "react";
import Calendar from "react-calendar";
import "../../styles/Product/productCalendar.css";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../../context/Reservation/ReservationContext";
import { useMediaQuery } from 'react-responsive'
import { calendarQueryProduct } from "../../constants/resolutions";
import { isWithinInterval } from "date-fns";

const ProductCalendar = ({id, bookings}) => {

  const navigate = useNavigate();

  const {setReservationAttempt} = useContext(ReservationContext)

  const handleOnClickReservation = () => {
    if (localStorage.getItem("token")) {
      navigate(`/autos/${id}/reserva`);
    } else {
      setReservationAttempt(true);
      navigate(`/login`);
    }
  };

  const doubleView = useMediaQuery({ minWidth: calendarQueryProduct });

  /* dias desahabilitados */
  function parseArrayInrange(date){
    const arrayDate = (date).split("-",3);
    const year = parseInt(arrayDate[0]);
    const month = parseInt(arrayDate[1]-1);
    const day = parseInt(arrayDate[2]);
    return new Date(year,month,day)
  }
  
  const transformArrayInDate = (dates) => {
    const rangeDate = dates?.map((range)=>{
      const rangesDate = [
        parseArrayInrange(range?.start_date),
        parseArrayInrange(range?.end_date)
      ]
      return rangesDate
    })
    return rangeDate;
  }
  
  const disabledRanges = transformArrayInDate(bookings)

  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }
  
  function isWithinRanges(date, ranges) {
    return ranges?.some(range => isWithinRange(date, range));
  }
  
  
  function tileDisabled({ date, view }) {
    if (view === 'month') {
      return isWithinRanges(date, disabledRanges);
    }
  }

  return (
    <>
      <section className="product--calendarLayout">
        <h2>Fechas disponibles</h2>
        <div className="product--calendarLayout-elements">
          <div className="product--calendarLayout-container">
          <Calendar 
          showDoubleView={doubleView} 
          minDate={new Date()} 
          calendarType="US" 
          className="calendarProducto"
          tileDisabled={tileDisabled}
          />
          </div>
          <div className="product--calendarLayout-form">
            <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
            <button
              className="primary-button calendarLayout-button"
              onClick={handleOnClickReservation}
            >
              Iniciar reserva
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCalendar;
