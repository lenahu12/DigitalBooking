import React, { useState } from "react";
import Select from "react-select";

const BookingTime = ({setTime, errors}) => {
  const time = [
    { checkIn: "00:00 AM", value: "00:00", checkOut: "01:00 AM" },
    { checkIn: "01:00 AM", value: "01:00", checkOut: "02:00 AM" },
    { checkIn: "02:00 AM", value: "02:00", checkOut: "03:00 AM" },
    { checkIn: "03:00 AM", value: "03:00", checkOut: "04:00 AM" },
    { checkIn: "04:00 AM", value: "04:00", checkOut: "05:00 AM" },
    { checkIn: "05:00 AM", value: "05:00", checkOut: "06:00 AM" },
    { checkIn: "06:00 AM", value: "06:00", checkOut: "07:00 AM" },
    { checkIn: "07:00 AM", value: "07:00", checkOut: "08:00 AM" },
    { checkIn: "08:00 AM", value: "08:00", checkOut: "09:00 AM" },
    { checkIn: "09:00 AM", value: "09:00", checkOut: "10:00 AM" },
    { checkIn: "10:00 AM", value: "10:00", checkOut: "11:00 AM" },
    { checkIn: "11:00 AM", value: "11:00", checkOut: "12:00 PM" },
    { checkIn: "12:00 PM", value: "12:00", checkOut: "01:00 PM" },
    { checkIn: "01:00 PM", value: "13:00", checkOut: "02:00 PM" },
    { checkIn: "02:00 PM", value: "14:00", checkOut: "03:00 PM" },
    { checkIn: "03:00 PM", value: "15:00", checkOut: "04:00 PM" },
    { checkIn: "04:00 PM", value: "16:00", checkOut: "05:00 PM" },
    { checkIn: "05:00 PM", value: "17:00", checkOut: "06:00 PM" },
    { checkIn: "06:00 PM", value: "18:00", checkOut: "07:00 PM" },
    { checkIn: "07:00 PM", value: "19:00", checkOut: "08:00 PM" },
    { checkIn: "08:00 PM", value: "20:00", checkOut: "09:00 PM" },
    { checkIn: "09:00 PM", value: "21:00", checkOut: "10:00 PM" },
    { checkIn: "10:00 PM", value: "22:00", checkOut: "11:00 PM" },
    { checkIn: "11:00 PM", value: "23:00", checkOut: "00:00 AM" },
  ];

  const options = time.map((time) => {
    return {
      label: time.checkIn,
      value: time.value,
      checkIn: time.checkIn,
      checkOut: time.checkOut,
    };
  });

  const [selectValue, setSelectValue] = useState(null);


  return (
    <div className="containerForm-containerCheck">
      <h2>Tu horario de llegada</h2>
      <div className="containerForm-containerCheck-select animate__animated animate__backInLeft animate__fast">
        <h3>
          <i className="fa-regular fa-circle-check containerCheck-select-icon"></i>
          {selectValue
            ? `Tu vehiculo va a estar listo para el check-in entre las ${selectValue.checkIn} y las ${selectValue.checkOut}`
            : "Seleccione horario del check-in de su vehiculo"}
        </h3>
        <p>Indicá tu horario estimado de llegada</p>
        <Select
          className="searchbar__container"
          classNamePrefix="searchbar"
          placeholder="Seleccionar hora de llegada"
          defaultValue=""
          options={options}
          onChange={(e) => {
            setSelectValue(e);
            setTime(e.value);
          }
        }
             
        />
        <small className="booking--errors">{errors.time}</small>
      </div>
    </div>
  );
};

export default BookingTime;
