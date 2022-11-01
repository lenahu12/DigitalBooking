import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../Products/ProductGallery";
import ProductDescription from "../Products/ProductDescription";
import ProductFeatures from "../Products/ProductFeatures";
import ProductPolicies from "../Products/ProductPolicies";
import ProductCalendar from "../Products/ProductCalendar";
import ProductHeaderLocation from "../Products/ProductHeaderLocation";
import { CarContext } from "../../context/Car/CarContext";
import 'animate.css';

const ProductLayout = () => {
  const params = useParams();
  
  const {cars} = useContext(CarContext)
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (cars.data) {      
      const filtered = cars.data.find((item) => parseInt(params.productId) === item.id);
      setCar(filtered);
    }
  }, [cars]);

  return (
    <>
      {
      car && 
      (
        <>
          <ProductHeaderLocation city={car?.city} title={car?.title}/>
          <div className="animate__animated animate__slideInUp">
          <ProductGallery images={car?.images} title={car?.title} />
          <ProductDescription title={car?.title} description={car?.description} />
          <ProductFeatures features={car?.features} />
          <ProductCalendar id={car?.id} bookings={car?.bookings}/>
          <ProductPolicies policies={car?.policies} />
          </div>
        </>
      )}
    </>
  );
};
 

export default ProductLayout;
