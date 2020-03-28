import { FETCH_PRODUCTS_CART_REQUEST, FETCH_PRODUCTS_CART_SUCCESS, FETCH_PRODUCTS_CART_ERROR } from "./actionTypes";

const baseUrl= 'http://127.0.0.1:3001/cart';

const fetchProductsCartRequest = () => {
    return {
        type: FETCH_PRODUCTS_CART_REQUEST,
    }
}

const fetchProductsCartSuccess = productsList => {
    return {
        type: FETCH_PRODUCTS_CART_SUCCESS,
        payload: {
            productsList
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

const getProductsCart = () => dispatch => {
    dispatch(fetchProductsCartRequest());
    fetch(baseUrl)
        .then(res => res.json())
        .then(products => dispatch(fetchProductsCartSuccess(products)))
        .catch(error => dispatch(fetchProductsCartError(error)))

}

export default getProductsCart;

//to retreive products from cart