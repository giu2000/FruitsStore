import React from 'react';
import { Link } from "react-router-dom";

const ProductDetailsLink = props => {
    const {productId } = props;
    return (

        <Link to={`/product_details/${productId}`} >DETAILS</Link>
    )
}

export default ProductDetailsLink;