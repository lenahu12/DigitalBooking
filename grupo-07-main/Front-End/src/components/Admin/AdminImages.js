import React, { useContext, useState } from "react";
import { AddImagesContext } from "../../context/Admin/AddImagesContext";
import AdminImg from "./AdminImg";

const AdminImages = ({errors}) => {

  const {images} = useContext(AddImagesContext);

  const [image, setImage] = useState("")

  return (
    <>
    <div className="adminForm-divImages">
      <h2>Cargar imágenes</h2>
        {images && images.map(img => <AdminImg key={img.url_image} url={img.url_image} ></AdminImg>)}
      <div className="adminForm-images-divInput">
        <input
          type="text"
          className="adminForm-input adminForm-divInput-input"
          placeholder="Insertar https://"
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="button" className="primary-button adminForm-category-divLabelButton" onClick={() => images.push({url_image: image})}>
          +
        </button>
      </div>
      <small className="errors">{errors.images}</small>
    </div>
    </>
  );
};

export default AdminImages;
