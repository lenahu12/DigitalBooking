import React from 'react'
import { useNavigate } from "react-router-dom";
import 'animate.css';

const SuccessfulMessage = ({text}) => {
    const navigate = useNavigate();
  return (
    <div className="booking-container-successfulMessage animate__animated animate__bounceIn animate__slow">
            <div className="booking-successfulMessage-card">
              <i className="fa-regular fa-circle-check booking-successfulMessage-icon"></i>
              <h2 className="booking-successfulMessage-h2">¡Muchas gracias!</h2>
              <h3>{text}</h3>
              <button className="primary-button" onClick={() => navigate("/")}>Confirmar</button>
            </div>
          </div>
  )
}

export default SuccessfulMessage;