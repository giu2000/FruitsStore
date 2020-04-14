import { 
    FETCH_PRODUCT_DETAILS_REQUEST,
    FETCH_PRODUCT_DETAILS_ERROR,
    FETCH_PRODUCT_DETAILS_SUCCESS, 

} from "../../product-details-state/types/ActionTypes";

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from '../types/ActionTypes';

const initialState = {
    isLoading: false,
    error: null,
    products: [],
    currentProduct: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
        case FETCH_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload.products
            }
        case FETCH_PRODUCTS_ERROR:
        case FETCH_PRODUCT_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case FETCH_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentProduct: action.payload.product
            }
        default:
            return state;
    }
}

export default productsReducer;