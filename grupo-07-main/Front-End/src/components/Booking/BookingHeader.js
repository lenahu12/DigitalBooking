import React from "react";
import { useNavigate} from "react-router-dom";
import "../../styles/Product/productHeaderLocation.css";


const BookingHeader = ({title, id}) => {
  const navigate = useNavigate();
  
  return (
    <section>
      <nav className="productHeader--title-container">
        <div>
          <h4>Auto</h4>
          <h1>{title}</h1>
        </div>
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(`/autos/${id}`)}></i>
      </nav>
    </section>
  );
};

export default BookingHeader;
