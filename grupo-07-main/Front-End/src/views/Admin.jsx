import React from "react";
import AdminFeatures from "../components/Admin/AdminFeatures";
import AdminImages from "../components/Admin/AdminImages";
import AdminPolicies from "../components/Admin/AdminPolicies";
import AdminLocation from "../components/Admin/AdminLocation";
import AdminHeader from "../components/Admin/AdminHeader";
import "../styles/Admin/Admin.css";
import { useContext } from "react";
import { CreateCarContext } from "../context/Admin/CreateCarContext";
import { CreatePoliciesContext } from "../context/Admin/CreatePoliciesContext";
import { AddImagesContext } from "../context/Admin/AddImagesContext";
import { AddFeaturesContext } from "../context/Admin/AddFeaturesContext";
import axios from "axios";
import { useState } from "react";
import SuccessfulMessage from "../components/Global/SuccessfulMessage";

const Admin = () => {

  const {title, description, city, category, location} = useContext(CreateCarContext);
  const {termsContent, safetyContent, cancellationContent} = useContext(CreatePoliciesContext);
  const {images} = useContext(AddImagesContext);
  const {features} = useContext(AddFeaturesContext);

  const [formErrors, setFormErrors] = useState({});
  const [addCarSuccess, setAddCarSuccess] = useState(false);

  /* valores input */
  const addCarParams = {
    title: title,
    description: description,
    position: location,
    city:{
      id: city
    },
    category:{
      id: category
    },
    images: images,
    features: features,
    policies: [{
      terms_title:"Normas del auto",
      terms_content: termsContent,
      safety_title:"Salud y seguridad",
      safety_content: safetyContent,
      cancellation_title:"Política de cancelación",
      cancellation_content: cancellationContent  
    }]
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    
    const createCar = async () => {
      try {
        await axios.post("http://54.176.81.27:8080/autos/agregar", addCarParams)
        .then(response => console.log(response))
        setAddCarSuccess(true);
      } 
      
      catch (error) {
        console.log(error);
      }
    }


    createCar();
  }

  const validate = () => {

    const errors = {};

    if (!title) {
      errors.title = "El nombre es requerido"
    }

    if(!description) {
      errors.description = "La descripción es requerida"
    }

    if(!location) {
      errors.location = "La localización es requerida"
    }

    if (!city) {
      errors.city = "La ciudad es requerida"
    }

    if (!category) {
      errors.category = "La categoria es requerida"
    }

    if (images.length === 0) {
      errors.images = "Al menos una imagen es requerida"
    }

    if(features.length === 0) {
      errors.features = "Al menos una caracteristica es requerida"
    }

    if(!termsContent) {
      errors.termsContent = "La descripción de las normas del auto es obligatoria"
    }

    if(!safetyContent) {
      errors.safetyContent = "La descripción de las politicas de seguridad son obligatorias"
    }

    if(!cancellationContent) {
      errors.cancellationContent = "La descripción de las politicas de cancelación son obligatorias"
    }

    return errors;

  }


  return (
    <>
    {addCarSuccess? <SuccessfulMessage text="Tu auto se creo con exito"/>
    :
    <>
      <AdminHeader/>
      <section className="adminForm-sectionContainer">
        <h2 className="adminForm-sectionContainer-title">Crear auto</h2>
        <form action="" className="adminForm-formCard" onSubmit={handleFormSubmit}>
          <AdminLocation errors={formErrors} />
          <AdminFeatures errors={formErrors} />
          <AdminPolicies errors={formErrors} />
          <AdminImages errors={formErrors}/>
          <div className="adminForm-divButtonCrear">
            <button className="primary-button">Crear</button>
          </div>
        </form>
      </section>
    </>
      }
    </>
  );
};

export default Admin;
