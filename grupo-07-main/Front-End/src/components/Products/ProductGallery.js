import React, { useState } from "react";
import ProductCarousel from './ProductCarousel'

const ProductGallery = ({images, title}) => {

    const style = { backgroundImage: "url(" + images[0]?.url_image + ")" }
    const style4 = { backgroundImage: "url(" + images[4]?.url_image  + ")" }
    const [vermas, setVermas] = useState(false);

    return (
        <>
            <div className="product-galery--desktop">
                <div className="product--galery-container">
                    <div className="product--galery-img-primary" style={style} />
                    <img className="product--galery-img-secundary" src={images[1]?.url_image} alt={"Imagen del auto " + title} />
                    <img className="product--galery-img-secundary" src={images[2]?.url_image} alt={"Imagen del auto " + title} />
                    <img className="product--galery-img-secundary" src={images[3]?.url_image} alt={"Imagen del auto " + title} />
                    <div className="product--galery-img-div" style={style4} >

                    <button onClick={() => setVermas(vermas => !vermas)} className="product--galery-button"> Ver más </button>
                    </div>

                </div>
                <div className={vermas ? "product--galery-carousel" : "displaynone"}>
                    <i onClick={() => setVermas(vermas => !vermas)} className="fa-thin fa-x product--galery-carousel-icon white" ></i>
                    <ProductCarousel images={images} />
                </div>
            </div>
            <div className="product-galery--tablet">
                <ProductCarousel images={images} />
            </div>
        </>
    );

}

export default ProductGallery;