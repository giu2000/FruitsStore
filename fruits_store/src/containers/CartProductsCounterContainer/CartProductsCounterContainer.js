import React from 'react';
import { connect } from 'react-redux';
import { CartProductsCounter } from '../CartProductsCounterContainer';

const mapStateToProps = state => {
    const { cart: { counter } } = state;
    return {
        cartProductsCounter: counter
    }
}

const CartProductsCounterContainer = connect(mapStateToProps)(CartProductsCounter);

export default CartProductsCounterContainer;