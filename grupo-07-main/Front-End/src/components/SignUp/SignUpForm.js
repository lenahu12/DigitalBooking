import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();

  const initialValues = { name: "", surname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {setUserCredentials} = useContext(UserContext);
;

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


      const saveUser = async () => {
        try {
          await axios.post("http://54.176.81.27:8080/api/user/guardar", {
            name: formValues.name,
            surname: formValues.surname,
            email: formValues.email,
            password: formValues.password,
            roles: [{
              name: "USER"
            }]
          });

          const loginParams = new URLSearchParams();
          loginParams.append("email", formValues.email);
          loginParams.append("password", formValues.password)
          const newLoggedUser = await axios.post(`http://54.176.81.27:8080/login`, loginParams);

          if (newLoggedUser.data) {
            localStorage.setItem("token", newLoggedUser.data.access_token);
            setUserCredentials(true)
          }
          navigate("/")
        } 
        
        catch (error) {
          console.log(error);
        }
      };
      saveUser();
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/;

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!values.name) {
      errors.name = "El nombre de usuario es requerido";
    } else if (values.name.length <= 2) {
      errors.name = "El nombre debe contener al menos 3 caracteres";
    } else if (values.name.length > 30) {
      errors.name = "El nombre es demasiado largo";
    }

    if (!values.surname) {
      errors.surname = "El apellido es requerido";
    } else if (values.surname.length <= 2) {
      errors.surname = "El apellido debe contener al menos 3 caracteres";
    } else if (values.surname.length > 30) {
      errors.surname = "El apellido es demasiado largo";
    }

    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!values.email.match(emailRegex)) {
      errors.email = "Porfavor ingrese una direccion de correo valida";
    }

    if (!values.password) {
      errors.password = "La contraseña es requerida";
    } else if (!values.password.match(passRegex)) {
      errors.password =
        "La contraseña debe contener mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "La confirmacion es requerida";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Las contraseñas deben ser coincidentes";
    }

    return errors;
  };

  return (
    <section className="registrationForm--container">
      <form
        className="registrationForm--form"
        onSubmit={submitHandler}
        noValidate
      >
        <h1 className="center">Registro</h1>
        <p className="registrationForm--form-info">
          Por favor, complete este formulario para crear una cuenta.
        </p>
        <label>Nombre</label>
        <input
          type="text"
          value={formValues.name}
          name="name"
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.name}</small>
        <label>Apellido</label>
        <input
          type="text"
          value={formValues.surname}
          name="surname"
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.surname}</small>
        <label>E-mail</label>
        <input
          type="email"
          value={formValues.email}
          name="email"
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.email}</small>
        <label>Contraseña</label>
        <input
          type="password"
          value={formValues.password}
          name="password"
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.password}</small>
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
          onChange={changeHandler}
        />
        <small className="errors">{formErrors.confirmPassword}</small>
        <button
          type="submit"
          className="registrationForm--form-button primary-button"
        >
          Registrarse
        </button>
        <div className="registrationForm--form-info">
          <p>
            ¿Ya tienes una cuenta?{" "}
            <span className="link" onClick={() => navigate("/login")}>
              Entra aquí
            </span>
          </p>
          <small>
            Al hacer clic en el botón Registrarse, acepta nuestros Términos y
            Condiciones
          </small>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
