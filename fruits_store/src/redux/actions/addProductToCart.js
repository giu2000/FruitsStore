import { LOAD_POST_PRODUCT_REQUEST, LOAD_POST_PRODUCT_SUCCESS, LOAD_POST_PRODUCT_ERROR } from "./actionTypes"
import getProductsCart from "./getCartProducts"

const loadPostProductRequest = productToAdd => {
    return {
        type: LOAD_POST_PRODUCT_REQUEST,
        payload: {
            productToAdd
        }
    }
}

const loadPostProductSuccess = () => {
    return {
        type: LOAD_POST_PRODUCT_SUCCESS,
    }
}

const loadPostProductError = error => {
    return {
        type: LOAD_POST_PRODUCT_ERROR,
        payload: {
            error
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/cart';
const optionsForPOSTRequest = product =>  {
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
    dispatch(loadPostProductRequest(product));
    fetch(baseUrl, optionsForPOSTRequest(product))
        .then(res => res.json())
        .then(product => dispatch(loadPostProductSuccess()))
        .catch(error => dispatch(loadPostProductError(error)));
    dispatch(getProductsCart);
}

export default addProductToCart;