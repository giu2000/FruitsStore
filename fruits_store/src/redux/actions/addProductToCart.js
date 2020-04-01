import { 
    ADD_PRODUCT_TO_CART_REQUEST, 
    ADD_PRODUCT_TO_CART_SUCCESS, 
    ADD_PRODUCT_TO_CART_ERROR 
} from "./actionTypes";

import getCartProducts from './getCartProducts';

const addProductToCartRequest = () => {
    return {
        type: ADD_PRODUCT_TO_CART_REQUEST,
    }
}

const addProductToCartSuccess = product => {
    return {
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: {
            product
        }
    }
}

const addProductToCartError = error => {
    return {
        type: ADD_PRODUCT_TO_CART_ERROR,
        payload: {
            error
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/cart';

const getProductIndex = (cart, id) => cart.find(prdct => prdct.id === id);


const addProductToCart = product => (dispatch, getState) => {
    const { cart } = getState();
    const index = getProductIndex(cart, product.id);
    let endpoint, method, qty;

    dispatch(addProductToCartRequest());

    if(index >= 1){ //item già nel carrello
        endpoint = `${baseUrl}/${product.id}`;
        method = 'PUT';
        qty = cart.products[index].quantity || 0
    }
    else{
        endpoint = baseUrl;
        method = 'POST';
        qty = 0
    }

    fetch(endpoint, {
        method,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...product,
            quantity: qty+1
        })
    })
    .then(response => response.json())
    .then(prdct => dispatch(addProductToCartSuccess(prdct)))
    .catch(error => dispatch(addProductToCartError(error)));
    dispatch(getCartProducts());

}

export default addProductToCart;