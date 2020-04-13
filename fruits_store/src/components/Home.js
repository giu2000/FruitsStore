import React from 'react';
import CustomLink from './CustomLink';

const Home = () => {
    return (
        <>
            <CustomLink pathLink="/products_list" text = "PRODUCTS LIST" />
            <br></br>
            <CustomLink pathLink="/cart" text = "CART" />
        </>
    )
}

export default Home;