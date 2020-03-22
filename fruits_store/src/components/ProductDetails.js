import React from 'react';

const details = product => {
    return Object.keys(product).map(key => {
        return (
            <div key={key}>{`${key}: ${product[key]}`}</div>
        )
    })
}

const ProductDetails = props => {
    console.log('selectedProduct', props.selectedProduct)
    return (
        <>
            <div><b>Product Details</b></div>
            <div>{props.selectedProduct !== '' ? details(props.products[props.selectedProduct-1]) : 'seleziona un prodotto '}</div>
            
        </>
    )
}

export default ProductDetails;
