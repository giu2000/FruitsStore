import React from 'react';

const ProductDetails = props => {
    const { product } = props;

    return (
        <div>
            <h5>Product Details</h5>
            { product.id &&
                <ul>
                    <li>ID: {product.id}</li>
                    <li>NAME: {product.name}</li>
                    <li>DESCRIPTION: {product.description}</li>
                    <li>PRICE: ${product.price}</li>
                </ul>
            }
        </div>
    )
}

export default ProductDetails;


/*<div>{props.selectedProduct !== '' ? details(props.products[props.selectedProduct-1]) : 'seleziona un prodotto '}</div>*/