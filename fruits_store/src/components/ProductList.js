import React from 'react';
import Product from './Product';

// let productList = [
//     {
//         "name": "product1",
//         "price": "price1"        
//     },
//     {
//         "name": "product2",
//         "price": "price2"        
//     },
//     {
//         "name": "product3",
//         "price": "price3"        
//     }
// ]

const ProductList = (props) => {
    
    return(
        <ul>
            {props.products.map((elem, index) => {
            return (
                    <Product 
                        key={index}
                        name={elem.name}
                    />
                )
            })
        }
        </ul>
        
    )
}

export default ProductList;