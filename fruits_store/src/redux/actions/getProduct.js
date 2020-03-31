import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR
} from './actionTypes';

const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST,
    }
}

const fetchProductSuccess = product => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: {
            product
        }
    }
}

const fetchProductError = error => {
    return {
        type: FETCH_PRODUCT_ERROR,
        payload: {
            error
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/products';


const getProduct = id => dispatch => {
    dispatch(fetchProductRequest());
    fetch(`${baseUrl}/${id}`)
        .then(res => res.json())
        .then(product => {
            dispatch(fetchProductSuccess(product))
        })
        .catch(error => {
            console.error(error);
            dispatch(fetchProductError(error));
        })
};

export default getProduct