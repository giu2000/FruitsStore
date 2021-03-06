import {
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_ERROR 
} from '../types/ActionTypes';

const fetchProducts = url => dispatch => {
    dispatch(fetchProductsRequest());
    fetch(url)
        .then(res => res.json())
        .then(products => dispatch(fetchProductsSuccess(products)))
        .catch(error => dispatch(fetchProductsError(error)))
}

const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}

const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
            products
        }
    }
}

const fetchProductsError = error => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: {
            error
        }
    }
}

export default fetchProducts;