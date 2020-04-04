import React from 'react';

const Product = (props) => {
    const { name, price } = props.product;
    return (
        <div>
            <b>{name}</b> | <i>$ {price}</i>
        </div>)
}

export default Product;