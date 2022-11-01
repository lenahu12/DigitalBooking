import React, { useContext } from "react";
import { AddFeaturesContext } from "../../context/Admin/AddFeaturesContext";
import Select from "react-select";

const AdminFeature = ({ title, icon }) => {

  const {features, setFeatures} = useContext(AddFeaturesContext);

  const handleOnClickDeleteFeature = () => {
    const filteredFeatures = features.filter((feature) => feature.title !== title)
    setFeatures(filteredFeatures);
  }
  return (
    <div className="adminForm-category-divLabel ">
      <label className="adminForm-category-Label category-divLabel-nombre">
        <input type="text" placeholder={title} className="adminForm-input " disabled />
      </label>
      <div className="adminForm-category-divIconButton">
      <label className="adminForm-category-Label category-divLabel-icon">
      <Select 
          className="adminForm-category-divLabelSelect adminForm-category-divLabelSelect-disable"
          placeholder={<i className={icon}></i>}
          disabled
          />
      </label>
        <button
          type="button"
          className="primary-button adminForm-category-divLabelButton adminForm-categorybutton-x"
          onClick={handleOnClickDeleteFeature}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default AdminFeature;
