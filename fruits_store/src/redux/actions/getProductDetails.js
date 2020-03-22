// import { FETCH_PRODUCT_DETAILS_REQUEST, FETCH_PRODUCT_DETAILS_SUCCESS, FETCH_PRODUCT_DETAILS_ERROR } from './actionTypes';
// // import thunk from 'redux-thunk';

import { GET_PRODUCT_DETAILS } from "./actionTypes";

// const getProductDetails = idProduct => dispatch => {
//     dispatch(fetchProductDetailsRequest()); //indicate that a fetch request has started
//     fetch(`http://localhost:3001/products/${idProduct}`)
//         .then(res => res.json())
//         .then(product => {
//             dispatch(fetchProductDetailsSuccess(product))
//         })
//         .catch(error => {
//             dispatch(fetchProductDetailsError(error))
//         })
// }

// const fetchProductDetailsRequest = () => {
//     return {
//         type: FETCH_PRODUCT_DETAILS_REQUEST
//     }
// }

// const fetchProductDetailsSuccess = product => {
//     return {
//         type: FETCH_PRODUCT_DETAILS_SUCCESS,
//         payload: {
//             product
//         }
//     }
// }
// const fetchProductDetailsError = error => {
//     return {
//         type: FETCH_PRODUCT_DETAILS_ERROR,
//         payload: {
//             error
//         }
//     }
// }

const getProductDetails = productId => {
    return {
        type: GET_PRODUCT_DETAILS,
        payload: {
            productId
        }
    }
}


export default getProductDetails;