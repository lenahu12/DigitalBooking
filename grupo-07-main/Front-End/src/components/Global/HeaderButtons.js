import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  switch (location.pathname) {

    case "/login": return <div className="header--nav-buttons-container"><button className="primary-button" onClick={() => navigate("/signup")}>Crear Cuenta</button></div>;
    case "/signup": return <div className="header--nav-buttons-container"><button className="primary-button" onClick={() => navigate("/login")}>Iniciar Sesión</button></div>;
    default : return (
      <div className="header--nav-buttons-container">
        <button className="primary-button" onClick={() => navigate("/signup")}>Crear Cuenta</button>
        <button className="primary-button" onClick={() => navigate("/login")}>Iniciar Sesión</button>
      </div>
    );
  }
};

export default HeaderButtons;