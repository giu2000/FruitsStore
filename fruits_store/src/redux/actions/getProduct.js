import { 
    FETCH_PRODUCT_REQUEST, 
    FETCH_PRODUCT_SUCCESS, 
    FETCH_PRODUCTS_ERROR 
} from "./actionTypes"

const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
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
        type: FETCH_PRODUCTS_ERROR,
        payload: {
            error
        }
    }
}


const getProduct = productId => dispatch => {
    dispatch(fetchProductRequest());
    fetch(`http://localhost:3001/products/${productId}`)
        .then(res => res.json())
        .then(product=> dispatch(fetchProductSuccess(product)))
        .catch(error => dispatch(fetchProductError(error)))
}

export default getProduct;