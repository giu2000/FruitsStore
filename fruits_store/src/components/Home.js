import React from 'react';
import CustomLink from './CustomLink';
import { 
    products_list, 
    cart 
} from '../utils/link';
import { 
    PRODUCTS_LIST_LINK_PLACEHOLDER,
    CART_LINK_PLACEHOLDER
} from '../utils/labels';

const Home = () => {
    return (
        <>
            <CustomLink pathLink={products_list} text={PRODUCTS_LIST_LINK_PLACEHOLDER} />
            <br></br>
            <CustomLink pathLink={cart} text={CART_LINK_PLACEHOLDER} />
        </>
    )
}

export default Home;