import React, { useContext } from "react";
import { UserContext } from "../../context/User/UserContext";


const BookingUser = ({changeHandlerCity, errors}) => {


  const {name,surname,email} = useContext(UserContext);


  return (
    <div className="containerForm-containerDataUser animate__animated animate__backInLeft animate__fast">
      <div className="containerForm-containerUserInput">
        <label htmlFor="" className="containerForm-Label">
          Nombre
          <input
            type="text"
            className="containerForm-input"
            placeholder={name}
            disabled
          />
        </label>

        <label htmlFor="" className="containerForm-Label">
          Apellido
          <input
            type="text"
            className="containerForm-input"
            placeholder={surname}
            disabled
          />
        </label>

        <label htmlFor="" className="containerForm-Label">
          Correo electronico
          <input
            type="text"
            className="containerForm-input"
            placeholder={email}
            disabled
          />
        </label>
        <label htmlFor="" className="containerForm-Label">
          Ciudad
          <input
            type="text"
            className="containerForm-input  containerForm-input-location"
            placeholder="Tigre"
            name="city"
            onChange={changeHandlerCity}
          />
        <small className="booking--errors">{errors.city}</small>
        </label>
      </div>
    </div>
  );
};

export default BookingUser;
