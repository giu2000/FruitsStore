import React from 'react';

const Product = (props) => {
    const { id, name, price } = props.product;
    return (
        <div>
            <b>{name}</b> | <i>$ {price}</i>
        </div>)
}

export default Product;