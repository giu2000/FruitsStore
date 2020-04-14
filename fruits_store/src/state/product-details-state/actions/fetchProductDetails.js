import { 
    FETCH_PRODUCT_DETAILS_REQUEST, 
    FETCH_PRODUCT_DETAILS_SUCCESS, 
    FETCH_PRODUCT_DETAILS_ERROR 
} from "../types/ActionTypes";

const fetchProductDetailsRequest = () => {
    return {
        type: FETCH_PRODUCT_DETAILS_REQUEST
    }
}

const fetchProductDetailsSuccess = product => {
    return {
        type: FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: {
            product
        }
    }
}

const fetchProductDetailsError = error => {
    return {
        type: FETCH_PRODUCT_DETAILS_ERROR,
        payload: {
            error
        }
    }
}


const fetchProductDetails = productId => dispatch => {
    dispatch(fetchProductDetailsRequest());
    fetch(`http://localhost:3001/products/${productId}`)
        .then(res => res.json())
        .then(product=> dispatch(fetchProductDetailsSuccess(product)))
        .catch(error => dispatch(fetchProductDetailsError(error)))
}

export default fetchProductDetails;