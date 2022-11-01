import React from 'react';
import "../../styles/Product/productFeatures.css";


const ProductFeatures = ({features}) => {
  const featuresList = features?.map((feature) => (
    <div key={feature?.id} className="productFeatures--feature">
      <i className={feature?.icon} style={{color:"#f0572d"}}/>
      <p className="productFeatures--feature-title">{feature?.title}</p>
    </div>)
  );

  return (
    <section>
        <h2 className="productFeatures--title">Caracteristicas del Auto</h2>
        <div className="productFeatures--line"></div>
        <div className="productFeatures--container">
          {featuresList}
        </div>
    </section>
  )
}

export default ProductFeatures;