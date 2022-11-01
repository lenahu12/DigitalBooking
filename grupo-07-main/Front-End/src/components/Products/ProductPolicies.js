import React from 'react';
import "../../styles/Product/productFeatures.css";
import "../../styles/Product/productPolicies.css";


const ProductPolicies = ({policies}) => {

    return (
        <section className="productPolicies">
            <h2 className="productPolicies--title">Qué tenés que saber</h2>
            <div className="productPolicies--line"></div>
            <div className="productPolicies--container">
                <div className="productPolicies--contentContainer">
                    <h3>{policies[0]?.terms_title}</h3>
                    <div className="productPolicies--content">
                        <p>{policies[0]?.terms_content}</p>
                    </div>
                </div>
                <div className="productPolicies--contentContainer">
                    <h3>{policies[0]?.safety_title}</h3>
                    <div className="productPolicies--content">
                        <p>{policies[0]?.safety_content}</p>
                    </div>
                </div>
                <div className="productPolicies--contentContainer">
                    <h3>{policies[0]?.cancellation_title}</h3>
                    <div className="productPolicies--cancelation-content">
                        <p>{policies[0]?.cancellation_content}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPolicies;