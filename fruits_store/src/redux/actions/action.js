import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from './actionTypes';


const getAllProducts = () => dispatch => {
    dispatch(fetchProductsRequest()); // dispatch della action to indicate that a fetch products request has started
    fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => {
            dispatch(fetchProductsSuccess(data)) // dispatch della action to indicate thant call server is OK and returned with data
        })
        .catch(err => {
            dispatch(fetchProductsError(err)) // dispatch della action to indicate that the call server is Ko 
        })
}

const fetchProductsRequest = data => {
    return {
        type: FETCH_PRODUCTS_REQUEST,
        payload: {
            products: data
        }
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