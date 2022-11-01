import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Product/productHeaderLocation.css";

const ProductHeaderLocation = ({ city, title}) => {
  const navigate = useNavigate();
  return (
    <section>
      <nav className="productHeader--title-container">
        <div>
          <h4>Auto</h4>
          <h1>{title}</h1>
        </div>
        <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
      </nav>
      <nav className="productHeader--location-container">
        <div>
          <h3><i className="fa-solid fa-location-dot"></i>{`  ${city?.name}, ${city?.country}`}</h3>
        </div>
        <div className="productHeader--location-icons">
          <div className="productHeader--location-icons-container">
            <h3>Muy Bueno</h3>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="rating-number">10</span>
        </div>
      </nav>
    </section>
  );
};

export default ProductHeaderLocation;