import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../styles/Product/productGallery.css";



const ProductCarousel = ({images}) => {
  const handleDragStart = (e) => e.preventDefault();
  const items = images.map(image => <img src={image.url_image} onDragStart={handleDragStart} role="presentation" alt="Imagen del auto" />);

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
    />
  );
}

export default ProductCarousel;