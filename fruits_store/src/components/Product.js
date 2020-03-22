import React from 'react';

const Product = (props) => {
    return(
        <div
            onClick = {(productId) => props.handleProductClick(productId)}
        >
        {props.product.name}
        </div>)
}

export default Product;