import React, { useContext } from "react";
import { CarContext } from "../../context/Car/CarContext";
import { CategoryContext } from "../../context/Category/CategoryContext";
import "../../styles/Categories/category.css";
import axios from "axios";

const Category = ({ title, image, id }) => {
  
  const { setCategorySearch, categorySearch } = useContext(CategoryContext);
  const { setCars } = useContext(CarContext);
  
  const handleOnClick = () => {
    setCategorySearch(id);
    const getCategoryFilteredData = async () => {
      try {
        const categoryFilteredData = await axios.get(
          `http://54.176.81.27:8080/autos/filtroCategoria/${categorySearch}`
        );
        setCars(categoryFilteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryFilteredData();
  };

  return (
    <div className="category--cards" onClick={handleOnClick}>
      <img
        className="home--category-card-img"
        src={image}
        alt="Previsualizacion de la categoria"
      />
      <div className="home--category-card-info-container">
        <h2>{title}</h2>
        <p>Autos</p>
      </div>
    </div>
  );
};

export default Category;
