import React from 'react';
import Navbar, { productListConfig, cartConfig } from './Navbar';

const Home = () => {
    return (
        <div >
            <Navbar firstConfig={productListConfig} secondConfig={cartConfig}/>
        </div>
    )
}

export default Home;