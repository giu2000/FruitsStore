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

const ProductDetails = props => {
    console.log('selectedProduct', props.selectedProduct)
    return (
        <>
            <div>Dettaglio Prodotto</div>
            <div>{props.selectedProduct !== '' ? `productId=${props.selectedProduct}` : 'seleziona un prodotto '}</div>
        </>
    )
}

export default ProductDetails;
