import React, { useContext, useEffect, useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { tablet } from "../../constants/resolutions";
import "moment/locale/es";
import "react-dates/lib/css/_datepicker.css";
import "../../styles/Calendar/calendar.css";
import { BrowserCalendarContext } from "../../context/BrowserCalendar/BrowserCalendarContext";

const Calendar = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const {startDateSearch, endDateSearch, setStartDateSearch, setEndDateSearch} = useContext(BrowserCalendarContext)

  useEffect(() => {
    if (startDate && endDate) {
      setStartDateSearch(startDate._d.toLocaleDateString());
      setEndDateSearch(endDate._d.toLocaleDateString());
    }
  },[startDate, endDate])

  useEffect(() => {
    if (!startDateSearch || !endDateSearch) {
      setStartDate(null)
      setEndDate(null)
    }
  }, [startDateSearch, endDateSearch])

  return (
    <DateRangePicker
      startDatePlaceholderText={"Desde"}
      endDatePlaceholderText={"Hasta"}
      showDefaultInputIcon={true}
      numberOfMonths={window.innerWidth < tablet ? 1 : 2}
      daySize={47}
      startDate={startDate}
      startDateId="your_unique_start_date_id"
      endDate={endDate}
      endDateId="your_unique_end_date_id"
      onDatesChange={({ startDate, endDate }) => {
        setStartDate(startDate)
        setEndDate(endDate)
      }}
      focusedInput={focusedInput}
      onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
    />
  );
};

export default Calendar;
