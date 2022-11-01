import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User/UserContext";
import "../../styles/Header&Footer/Header/loggedHeader.css";


const LoggedHeader = () => {
  const navigate = useNavigate();

  const {name, surname, setUserCredentials} = useContext(UserContext);
  const Swal = require('sweetalert2')
  
  const closingSesionHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: '¿Seguro que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f0572d',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {

      if (result.isConfirmed) {        
        setUserCredentials(false);
        localStorage.clear();
        navigate('/');
      } else {
        navigate('/')
      }
    })
  };

  const stringToLetter = (strings = "") => {
    return strings.charAt(0).toUpperCase()
  }


  return (
    
    <>
      <div className="loggedHeader--info-container">
        <div className="loggedHeader-avatarLetters"> <h2 className="loggedHeader-avatarLetters-letter">{stringToLetter(name)}{stringToLetter(surname)}</h2></div>
        <h3 className="loggedHeader-titleWelcome">Bienvenido de nuevo <span className="primary-color loggedHeader-titleWelcome-name">{name} {surname}</span></h3>
      <div className="header--nav-buttons-container">
        <form onSubmit={closingSesionHandler}><button className="primary-button" onClick={closingSesionHandler}>Cerrar Sesión</button></form>
      </div>
      </div>
    </>
  );
};

export default LoggedHeader;