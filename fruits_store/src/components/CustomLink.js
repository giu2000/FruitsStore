import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = props => {
    const { pathLink, text, productId } = props;
    return(
        <NavLink
            exact
            to={productId ? `/product_details/${productId}`: pathLink}
            activeStyle={
                {
                    textDecoration: 'none',
                    color: 'black'
                }
            }
        >
            {text}
        </NavLink>
    )
}

export default CustomLink;