import React from 'react';
import Button from '../components/Button';


// const ProductDetails = props => {
//     if(props.selectedProduct){
//         return (
//             <>
//                 <div>Dettaglio Prodotto</div>
//                 <div>{props.selectedProduct.name}</div>
//             </>
//         )
//     }
//     else return ({})
// }
/*<div>{props.selectedProduct !== '' ? `productId=${props.products[props.selectedProduct].description}` : 'seleziona un prodotto '}</div>*/
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
