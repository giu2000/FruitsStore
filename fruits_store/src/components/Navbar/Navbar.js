import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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

const routeConfig = {
    home: {
        pathLink: home,
        text: HOME_LINK_PLACEHOLDER 
    },
    productList: {
        pathLink: products_list,
        text: PRODUCTS_LIST_LINK_PLACEHOLDER
    },
    cart: {
        pathLink: cart,
        text: CART_LINK_PLACEHOLDER
    }
}

const Navbar = props => {
    const location = useLocation(); // ritorna un oggetto con le info della Current Url
    const renderList = Object.keys(routeConfig).filter(key => routeConfig[key].pathLink !== location.pathname)
                                            .map(key => {
                                                const { pathLink, text } = routeConfig[key]
                                                return(
                                                    <li key={key}>
                                                        <Link 
                                                            to={pathLink}
                                                        >{text}
                                                        </Link>
                                                    </li>
                                                )
                                            })
    return(
        <div className='navbar'>
            <ul>
               {renderList} 
            </ul>
        </div>
    )
}

export default Navbar;
