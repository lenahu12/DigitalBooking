import React, { useContext, useState } from "react";
import Select from "react-select";
import { AddFeaturesContext } from "../../context/Admin/AddFeaturesContext";
import AdminFeature from "./AdminFeature";

const AdminFeatures = ({errors}) => {

  const {features} = useContext(AddFeaturesContext);
  const [featureName, setFeatureName] = useState("");
  const [featureIcon, setFeatureIcon] = useState("");

  const iconOptions = [
  "fa-solid fa-location-dot", 
  "fa-solid fa-ship", 
  "fa-solid fa-gauge", 
  "fa-solid fa-chair", 
  "fa-solid fa-tv", 
  "fa-solid fa-backward", 
  "fa-solid fa-taxi"
  ];


  const iconList = iconOptions.map((icon) => {
    return {
      label: <i className={icon} />,
      value: icon,
    };
  })


  return (
    <>
    <div className="adminForm-divFeatures">
      <h2>Agregar caracteristicas</h2>
        {features && features.map(feature => <AdminFeature  title={feature.title} icon={feature.icon} />)}
      <div className="adminForm-category-divLabel ">
        <label className="adminForm-category-Label category-divLabel-nombre">
          Nombre
          <input
            type="text"
            className="adminForm-input "
            placeholder="Techo corredizo"
            onChange={e => setFeatureName(e.target.value)}
          />
        </label>
        <div className="adminForm-category-divIconButton">

        <label className="adminForm-category-Label category-divLabel-icon">
          Ícono
          <Select 
          className="adminForm-category-divLabelSelect"
          options={iconList}
          placeholder={<i className="fa-solid fa-car"></i>}
          onChange={e => setFeatureIcon(e.value)}
          />
        </label>
        <button 
        type="button"
        className="primary-button adminForm-category-divLabelButton"
        onClick={() => features.push({
          title: featureName,
          icon: featureIcon
        })}
        >
          +
        </button>
        </div>
      </div>
          <small className="errors">{errors.features}</small>
    </div>
    </>
  );
};

export default AdminFeatures;
