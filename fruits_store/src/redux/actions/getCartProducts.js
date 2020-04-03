import { 
    FETCH_CART_PRODUCTS_REQUETS, 
    FETCH_CART_PRODUCTS_SUCCESS, 
    FETCH_CART_PRODUCTS_ERROR 
} from "./actionTypes"

const fetchCartProductsRequest = () => {
    return {
        type: FETCH_CART_PRODUCTS_REQUETS
    }
}

const fetchCartProductsSuccess = products => {
    return {
        type: FETCH_CART_PRODUCTS_SUCCESS,
        payload: {
            products
        }
    }
}

const fetchCartProductsError = error => {
    return {
        type: FETCH_CART_PRODUCTS_ERROR,
        payload: {
            error
        }
    }
}

const getCartProducts = url => dispatch => {
    dispatch(fetchCartProductsRequest());
    fetch(url)
        .then(response => response.json())
        .then(products => dispatch(fetchCartProductsSuccess(products)))
        .catch(error => dispatch(fetchCartProductsError(error)))
}

export default getCartProducts;