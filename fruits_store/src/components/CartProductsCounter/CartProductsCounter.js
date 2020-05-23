import React from 'react';
import PropTypes from 'prop-types';
import { PRODUCTS_NUMBER } from '../../utils/labels';

const CartProductsCounter = ({counter}) => {
    return(
        <div>
            <p>{`${PRODUCTS_NUMBER}: ${counter}`}</p>
        </div>
    )
}

CartProductsCounter.propTypes = {
    counter: PropTypes.number
}

export default CartProductsCounter;