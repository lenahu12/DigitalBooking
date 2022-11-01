import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../../context/Reservation/ReservationContext";
import { UserContext } from "../../context/User/UserContext";
import Error from "../Global/Error";

const LoginForm = () => {

  const navigate = useNavigate();
  const initialValues = { email: "", pass: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const {setUserCredentials} = useContext(UserContext);
  const {reservationAttempt} = useContext(ReservationContext)



  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues)); 
    setIsSubmit(true);
  };


  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const logUser = async () => {
        try {
        const params = new URLSearchParams();
        params.append("email", formValues.email);
        params.append("password", formValues.pass);
        
        const loggedUserData = await axios.post(`http://54.176.81.27:8080/login`, params);
        const newToken = await loggedUserData.data.access_token;
        localStorage.setItem("token", newToken);
        setUserCredentials(true);
        navigate("/");
        } catch (error) {
          console.log(error);
        }
      };

      logUser()
    }
  },[formErrors])


  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "El email es requerido";
    } 

    if (!values.pass) {
      errors.pass = "La contraseña es requerida";
    } 
  
    return errors;
  };

  return (
    <section className="loginForm--container">
      <form className="loginForm--form" onSubmit={submitHandler} noValidate>
        {reservationAttempt && (
          <Error message={"Para realizar una reserva debes de estar logueado"} />
        )}
        <h1 className="center">Iniciar Sesión</h1>
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.email}</small>
        <label>Contraseña</label>
        <input
          type="password"
          name="pass"
          value={formValues.pass}
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.pass}</small>
        <button
          className="loginForm--form-button primary-button"
          type="submit"
          onClick={submitHandler}
        >
          Iniciar Sesión
        </button>
        <div className="loginForm--form-info">
          <p>
            ¿No estas registrado?{" "}
            <span className="link" onClick={() => navigate("/signup")}>
              Entra aquí
            </span>
          </p>
          <small>
            Al hacer clic en el botón Iniciar Sesión, acepta nuestros Términos y
            Condiciones
          </small>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
