import React , { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import { isWithinInterval } from "date-fns";



const TemplateCalendar = ({bookings}) => {

  
  const [date, setDate] = useState(new Date());
  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }
  
  function isWithinRanges(date, ranges) {
    return ranges.some(range => isWithinRange(date, range));
  }
  
  function parseArrayInrange(date){
    const arrayDate = (date).split("-",3);
    const year = parseInt(arrayDate[0]);
    const month = parseInt(arrayDate[1]-1);
    const day = parseInt(arrayDate[2]);
    return new Date(year,month,day)
  }
  
  const transformArrayInDate = (dates) => {
    const rangeDate = dates.map((range)=>{
      const rangesDate = [
        parseArrayInrange(range.start_date),
        parseArrayInrange(range.end_date)
      ]
      return rangesDate
    })
    return rangeDate;
  }
  
  const disabledRanges = transformArrayInDate(bookings)


  
  function tileDisabled({ date, view }) {
    if (view === 'month') {
      return isWithinRanges(date, disabledRanges);
    }
  }

 return (
 <div className='app'>
   <h1>React Calendar with Range</h1>
   <div>
     <Calendar 
     onChange={setDate} 
     minDate={new Date()} 
     calendarType="US" 
     showDoubleView
     tileDisabled={tileDisabled}
     />
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>{' '} {dayjs(date[0].toDateString()).format('DD-MM-YYYY')}
     &nbsp; to &nbsp;
     <span>End:</span> {dayjs(date[1].toDateString()).format('DD-MM-YYYY')}
   </p>
        ) : (
   <p>
     <span>Default selected date:</span>{' '} {date.toDateString()}
   </p>
        )}
 </div>
  );
}

export default TemplateCalendar;
