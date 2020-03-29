import { ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_ERROR } from "./actionTypes";
import getCartProducts from './getCartProducts';

const addProductToCartRequest = () => {
    return {
        type: ADD_PRODUCT_TO_CART_REQUEST
    }
}

const addProductToCartSuccess = product => {
    return {
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: {
            product: product
        }
    }
}

const addProductToCartError = error => {
    return {
        type: ADD_PRODUCT_TO_CART_ERROR,
        payload: {
            error: error
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/cart';
const optionsForPOSTRequest = product => {
    return {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(product)
    }
}

const addProductToCart = product => dispatch => {
    dispatch(addProductToCartRequest());
    fetch(baseUrl, optionsForPOSTRequest(product))
        .then(response => response.json())
        .then(prdct => dispatch(addProductToCartSuccess(prdct)))
        .catch(error => dispatch(addProductToCartError(error)));
    dispatch(getCartProducts());
}

export default addProductToCart;