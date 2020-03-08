import React from 'react';
import Product from '../product/Product';

let productList = [
    {
        "name": "product1",
        "price": "price1"        
    },
    {
        "name": "product2",
        "price": "price2"        
    },
    {
        "name": "product3",
        "price": "price3"        
    }
]

const ProductList = () => {
    
    return(
        <ul>
            {productList.map((elem, index) => {
            return (
                    <Product 
                        key={index}
                    />
                )
            })
        }
        </ul>
        
    )
}

export default ProductList;