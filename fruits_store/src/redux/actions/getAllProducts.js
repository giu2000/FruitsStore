import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from './actionTypes';

const getAllProducts = () => dispatch => {
    dispatch(fetchProductsRequest());
    fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(products => {
            dispatch(fetchProductsSuccess(products))
        })
        .catch(error => {
            dispatch(fetchProductsError(error))
            console.log('request error')
        })
}

const fetchProductsRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
    }
}

const fetchProductsSuccess = (products) => {
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

export default getAllProducts;