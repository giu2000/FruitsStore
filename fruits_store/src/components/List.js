import React from 'react';
import Product from '../product/Product';

const List = () => {
    const list = [];
    return(
        list.map((elem, index) => {
          return <Product key={index}/>
        })
    )
}