import React, { useContext } from "react";
import Card from "../Home/Cards";
import "../../styles/Cards/cardsLayout.css";
import { CarContext } from "../../context/Car/CarContext";
import 'animate.css';

const CardsLayout = () => {

  const {cars} = useContext(CarContext);

   const shuffle = (cars) => {
    return cars.sort(() => 0.5 - Math.random())
  } 

  const cardsCars = cars.data && shuffle(cars.data).map((car) => <Card key={car.id} car={car} />);

  return (    
    <section className="cardsLayout">
      <h2 className="section--title">Recomendaciones</h2>
      <div className="cardsLayout--cards animate__animated animate__fadeInUp">{cardsCars}</div>
    </section>
  );
};

export default CardsLayout;
