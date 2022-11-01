import React, { useState ,  useContext } from "react";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../layouts/SocialMedia";
import "../../styles/Header&Footer/Header/burgerMenu.css";
import { UserContext } from "../../context/User/UserContext";

const LoggedBurguerMenu = () => {
  const [verMenu, setVermenu] = useState(false);
  const navigate = useNavigate();
  const btnToggle = () => setVermenu((verMenu) => !verMenu);
  const {name, surname, setUserCredentials } = useContext(UserContext);



  const stringToLetter = (string = "") => {
    return string.charAt(0).toUpperCase();
  };

  const Swal = require('sweetalert2')
  
  const closingSesionHandlerB = (e) => {
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

  return (
    <>
      <div onClick={btnToggle} className="header--nav-btnburger">
        <i className="fa-solid fa-bars header--nav-divburger-iconX header--nav-divburger-iconXPading"></i>
      </div>
      <div className={verMenu ? "header--nav-divburger-true" : "displaynone"}>
        <div className="header--nav-divburger-bgcolor">
          <a onClick={btnToggle}>
            <i className="fa-thin fa-x header--nav-divburger-iconX white"></i>
          </a>
            <div className="burgerMenu--info-container">
              <div className="loggedHeader-avatarLetters burgerMenu-avatarLetters">
                <h2 className="loggedHeader-avatarLetters-letter burgerMenu-avatarLetters-letter">
                  {stringToLetter(name)}
                  {stringToLetter(surname)}
                </h2>
              </div>
              <h3 className="loggedHeader-titleWelcome burgerMenu-titleWelcome">
                Bienvenido de nuevo
              </h3>
              <h3 className="burgerMenu-titleWelcome-name">
                {name} {surname}
              </h3>
            </div>
        </div>
        <div className="header--nav-divburger-containerbtns">
          <div className="header--nav-divburger-containerbtns-btnsesion">
              <form onSubmit={closingSesionHandlerB}>
                <button
                  className="button-secondary burgerMenubutton"
                  onClick={closingSesionHandlerB}
                >
                  Cerrar Sesión
                </button>
              </form>
          </div>
        </div>
        <div className="header--nav-btnBurger-socialMedia">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default LoggedBurguerMenu;
