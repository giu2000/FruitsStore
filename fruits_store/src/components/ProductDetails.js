import React from 'react';

const details = product => {
    return Object.keys(product[0]).map(key => {
        return (
            <div key={key}>{`${key}: ${product[0][key]}`}</div>
        )
    })
}

const ProductDetails = props => {
    console.log('product details', props.selectedProduct)
    return (
        <div>
            <div><b>Product Details</b></div>
            <div>{props.selectedProduct !== '' ? details(props.products.filter(prd => props.selectedProduct.id === prd.id)) : 'seleziona un prodotto '}</div>
        </div>
    )
}

export default ProductDetails;


/*<div>{props.selectedProduct !== '' ? details(props.products[props.selectedProduct-1]) : 'seleziona un prodotto '}</div>*/