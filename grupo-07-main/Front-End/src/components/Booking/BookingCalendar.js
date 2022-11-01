import React from "react";
import Calendar from "react-calendar";
import { useMediaQuery } from 'react-responsive'
import { calendarQueryProduct } from "../../constants/resolutions";
import { isWithinInterval } from "date-fns";

const BookingCalendar = ({ setDate, bookings, errors }) => {

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
          parseArrayInrange(range.start_date),
          parseArrayInrange(range.end_date)
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
    <div className="containerForm-containerCalendar">
      <h2>Seleccioná tu fecha de reserva</h2>
      <Calendar
      className="animate__animated animate__backInLeft animate__fast"
        showDoubleView={doubleView}
        selectRange={true}
        onChange={setDate}
        minDate={new Date()}
        calendarType="US"
        tileDisabled={tileDisabled}
      />
      <small className="booking--errors">{errors?.start_date}</small>
    </div>
  );
};

export default BookingCalendar;
