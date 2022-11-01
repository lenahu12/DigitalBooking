import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialMedia from "../layouts/SocialMedia";
import "../../styles/Header&Footer/Header/burgerMenu.css";

const BurguerMenu = () => {
  const [verMenu, setVermenu] = useState(false);
  const navigate = useNavigate();
  const btnToggle = () => setVermenu((verMenu) => !verMenu);

  

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
            <h2 className="header--nav-divburger-h2menu white">MENÚ</h2>
        </div>
        <div className="header--nav-divburger-containerbtns">
          <div className="header--nav-divburger-containerbtns-btnsesion">

                <button
                  className="button-secondary burgerMenubutton"
                  onClick={() => navigate("/signup")}
                >
                  Crear Cuenta
                </button>
                <button
                  className="button-secondary burgerMenubutton"
                  onClick={() => navigate("/login")}
                >
                  Iniciar Sesión
                </button>
          </div>
        </div>
        <div className="header--nav-btnBurger-socialMedia">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default BurguerMenu;
