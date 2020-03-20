import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from './actionTypes';


const getAllProducts = () => (dispatch, getState) => {
    dispatch(fetchProductsRequest()); // dispatch della action to indicate that a fetch products request has started
    console.log('current-state', getState());
    fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => {
            dispatch(fetchProductsSuccess(data)) // dispatch della action to indicate thant call server is OK and returned with data
            console.log('fetchSuccess',data);
        })
        .catch(err => {
            console.log(err);
            dispatch(fetchProductsError(err)) // dispatch della action to indicate that the call server is Ko 
            console.log('fetchError')
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
        type: FETCH_PRODUCTS_REQUEST,
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