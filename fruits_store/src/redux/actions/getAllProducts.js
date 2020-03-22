import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from './actionTypes';

const getAllProducts = () => dispatch => {
    dispatch(fetchProductsRequest()); // dispatch della action to indicate that a fetch products request has started
    console.log('request ')
    fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(products => {
            dispatch(fetchProductsSuccess(products)) // dispatch della action to indicate thant call server is OK and returned with data
            console.log('request success')
        })
        .catch(error => {
            dispatch(fetchProductsError(error)) // dispatch della action to indicate that the call server is Ko 
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