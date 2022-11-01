import React from 'react'
import "../../styles/Product/productDescription.css"
const ProductDescription = ({title, description}) => {
  return (
    <article className="productDescription--container">
        <h2>{title}</h2>
        <p>{description}</p>
    </article>
  )
}

export default ProductDescription