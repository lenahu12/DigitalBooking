import React, { useContext } from "react";
import { AddImagesContext } from "../../context/Admin/AddImagesContext";

const AdminImg = ({ url }) => {

  const {images, setImages} = useContext(AddImagesContext);

  const handleOnClickDeleteImage = () => {
    const filteredImages = images.filter((img) => img.url_image !== url)
    setImages(filteredImages);
  }

  return (
    <div className="adminForm-images-divInput">
      <input
        type="text"
        className="adminForm-input adminForm-divInput-input"
        placeholder={url}
        disabled
        value={url}
      />
      <button
        type="button"
        className="primary-button adminForm-category-divLabelButton adminForm-categorybutton-x"
        onClick={handleOnClickDeleteImage}
      >
        x
      </button>
    </div>
  );
};

export default AdminImg;
