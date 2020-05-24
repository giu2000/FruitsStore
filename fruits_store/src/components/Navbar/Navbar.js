import React from 'react';
import CustomLink from '../CustomLink';
import {
    HOME_LINK_PLACEHOLDER,
    PRODUCTS_LIST_LINK_PLACEHOLDER,
    CART_LINK_PLACEHOLDER
} from '../../utils/labels';
import {
    home,
    products_list,
    cart
} from '../../utils/link';

const Navbar = props => {
    return(
        <div className='navbar'>
            <ul>
                <li>
                    <CustomLink pathLink={home} text={HOME_LINK_PLACEHOLDER} />
                </li>
                <li>
                    <CustomLink pathLink={cart} text={CART_LINK_PLACEHOLDER} />
                </li>
                <li>
                    <CustomLink pathLink={products_list} text={PRODUCTS_LIST_LINK_PLACEHOLDER} />
                </li>
            </ul>
        </div>
    )
}

export default Navbar;