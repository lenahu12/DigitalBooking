import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User/UserContext";
import "../styles/Booking/booking.css";
import dayjs from "dayjs";

import ProductHeader from "../components/Booking/BookingHeader";
import ProductPolicies from "../components/Products/ProductPolicies";
import BookingUser from "../components/Booking/BookingUser";
import BookingCalendar from "../components/Booking/BookingCalendar";
import BookingTime from "../components/Booking/BookingTime";
import BookingDetail from "../components/Booking/BookingDetail";
import SuccessfulMessage from "../components/Global/SuccessfulMessage";
import { CarContext } from "../context/Car/CarContext";
import 'animate.css';

const Booking = () => {
  const { cars } = useContext(CarContext);
  const { id } = useContext(UserContext);
  const params = useParams();

  const initialValues = {
    city: "",
    time: "",
    start_date: "",
    end_date: "",
    user: { id: "" },
    car: { id: parseInt(params.productId) },
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const [car, setCar] = useState(null);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);

  const [isSubmit, setIsSubmit] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    if (cars.data) {
      const filtered = cars.data.find(
        (item) => parseInt(params.productId) === item.id
      );
      setCar(filtered);
    }
  }, [cars]);

  //logicaform
  const changeHandlerCity = (e) => {
    const { value } = e.target;
    setFormValues({ ...formValues, city: value });
  };

  useEffect(() => {
    setFormValues({ ...formValues, time: time + ":00" });
  }, [time]);

  useEffect(() => {
    setFormValues({
      ...formValues,
      start_date: dayjs(date[0]).format("YYYY-MM-DD"),
      end_date: dayjs(date[1]).format("YYYY-MM-DD"),
    });
  }, [date]);

  useEffect(() => {
    setFormValues({ ...formValues, user: { id: id } });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const logBooking = async () => {
        try {
          await axios.post(
            "http://54.176.81.27:8080/reservas/agregar",
            formValues
          );
          setBookingSuccess(true);
        } catch (error) {
          console.log(error);
        }
      };
      logBooking();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};

    if (!values.city) {
      errors.city = "La ciudad es requerida";
    }

    if (!values.time) {
      errors.time = "El horario es requerido";
    }

    if (!values.start_date || !values.end_date) {
      errors.start_date = "Las fechas son requeridas";
    }

    return errors;
  };

  return (
    <>
      {car &&
        (bookingSuccess ? (
          <SuccessfulMessage text="Su reserva se ha realizado con éxito" />
        ) : (
          <>
            <ProductHeader title={car.title} id={car.id} />
            <div >
              <div className="booking-form">
                <form onSubmit={submitHandler}>
                  <h2 className="booking-form-h2">Completá tus datos</h2>
                  <div className="booking-containerForm">
                    <div className="containerForm-containerData-Izq data">
                      <BookingUser
                        changeHandlerCity={changeHandlerCity}
                        errors={formErrors}
                      />
                      <BookingCalendar
                        setDate={setDate}
                        bookings={car.bookings}
                        errors={formErrors}
                      />
                      <BookingTime setTime={setTime} errors={formErrors} />
                    </div>
                    <BookingDetail
                      submitHandler={submitHandler}
                      car={car}
                      date={date}
                    />
                  </div>
                </form>
              </div>

              <ProductPolicies policies={car.policies} />
            </div>
          </>
        ))}
    </>
  );
};

export default Booking;
