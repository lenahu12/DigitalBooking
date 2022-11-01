import React from "react";
import dayjs from "dayjs";

const BookingDetail = ({ car, date, submitHandler, errors }) => {

  return (
    <div className="containerForm-containerBooking booking animate__animated animate__backInRight animate__fast">
      <h2 className="containerForm-containerBooking-Title">
        Detalle de reserva
      </h2>
      <div className="containerForm-containerBooking-formbooking">
        <img
          className="containerForm-img"
          src={car.images[0].url_image}
          alt="imagen del auto"
        />
        <div className="containerForm-containerBooking-containerInfo">
          <div className="containerForm-containerBooking-carTitle">
            <h3>{car.category.title}</h3>
            <h2>{car.title}</h2>
            <div className="productHeader--location-icons-container">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <p className="containerForm-containerBooking-carLocation">
                <i className="fa-solid fa-location-dot containerCheck-select-icon"></i>
                {`${car.city.name}, ${car.city.country}`}
              </p>
            </div>
          </div>
          <div className="containerForm-containerBooking-line"></div>
          <label htmlFor="" className="containerForm-containerBooking-Label">
            Check in
            <input
              type="text"
              className="containerForm-containerBooking-input"
              placeholder={
                date.length > 0
                  ? dayjs(date[0].toDateString()).format("DD/MM/YYYY")
                  : "Seleccione fecha"
              }
              disabled
            />
          </label>
          <div className="containerForm-containerBooking-line"></div>
          <label htmlFor="" className="containerForm-containerBooking-Label">
            Check out
            <input
              type="text"
              className="containerForm-containerBooking-input"
              placeholder={
                date.length > 0
                  ? dayjs(date[1].toDateString()).format("DD/MM/YYYY")
                  : "Seleccione fecha"
              }
              disabled
            />
          </label>
          <div className="containerForm-containerBooking-line"></div>
          <div className="containerForm-containerBooking-botonera">
            <button onClick={submitHandler} className="primary-button containerForm-containerBooking-button">
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
