import React from 'react';
import PropTypes from 'prop-types';

const Product = ({name, price}) => {
    return (
        <div>
            <b>{name}</b> | <i>$ {price}</i>
        </div>)
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Product;