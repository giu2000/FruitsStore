import React from 'react';

const Product = (props) => {
    return(
        <div
            onClick = {() => props.handleProductClick(props.product.id)}
        >
        {props.product.name}
        </div>)
}

export default Product;