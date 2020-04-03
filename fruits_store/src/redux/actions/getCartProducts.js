import { 
    GET_CART_PRODUCTS_REQUEST, 
    GET_CART_PRODUCTS_SUCCESS, 
    GET_CART_PRODUCTS_ERROR 
} from "./actionTypes"

const getCartProductsRequest = () => {
    return {
        type: GET_CART_PRODUCTS_REQUEST
    }
}

const getCartProductsSuccess = products => {
    return {
        type: GET_CART_PRODUCTS_SUCCESS,
        payload: {
            products
        }
    }
}

const getCartProductsError = error => {
    return {
        type: GET_CART_PRODUCTS_ERROR,
        payload: {
            error
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/cart';
const getCartProducts = url => dispatch => {
    dispatch(getCartProductsRequest());
    fetch(baseUrl)
        .then(response => response.json())
        .then(products => dispatch(getCartProductsSuccess(products)))
        .catch(error => dispatch(getCartProductsError(error)))
}

export default getCartProducts;