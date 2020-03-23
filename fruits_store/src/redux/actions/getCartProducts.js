import { FETCH_PRODUCTS_CART_REQUEST, FETCH_PRODUCTS_CART_SUCCESS, FETCH_PRODUCTS_CART_ERROR } from "./actionTypes"

const fetchProductsCartRequest = () => {
    return {
        type: FETCH_PRODUCTS_CART_REQUEST
    }
}

const fetchProductsCartSuccess = products => {
    return {
        type: FETCH_PRODUCTS_CART_SUCCESS,
        payload: {
            products
        }
    }
}

const fetchProductsCartError = error => {
    return {
        type: FETCH_PRODUCTS_CART_ERROR,
        payload: {
            error
        }
    }
}

const getCartProducts = () => dispatch => {
    dispatch(fetchProductsCartRequest);
    fetch('http://localhost:3001/cart')
        .then(res => res.json())
        .then(products => {
            dispatch(fetchProductsCartSuccess(products))
        })
        .catch(error => dispatch(fetchProductsCartError(error)))
}

export default getCartProducts;