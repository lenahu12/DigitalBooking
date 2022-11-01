import React, { useContext } from "react";
import Category from "../Home/Category";
import "../../styles/Categories/categoryLayout.css";
import { CategoryContext } from "../../context/Category/CategoryContext";

const CategoryLayout = () => {

  const {categories} = useContext(CategoryContext)



  const categoryItems = categories.data && categories.data.map((category) => <Category image={category.url_image} title={category.title} key={category.id} id={category.id} />)
  

  return (
    categories && 
    <section>
      <h2 className="section--title">Buscar por categoria</h2>
      <div className="categoryLayout--categories animate__animated animate__fadeInLeft">{categoryItems}</div>
    </section>
  );
};

export default CategoryLayout;
