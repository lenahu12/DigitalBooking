import React from "react";
import "../../styles/Error/error.css";

const Error = ({ message }) => {
  return (
    <div className="error--container">
      <i className="fa-regular fa-circle-info"></i>
      <p>{message}</p>
    </div>
  );
};

export default Error;
