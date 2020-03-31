import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_ERROR
} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    items: [],
    currentItem: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentItem: action.payload.product
            }
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default productsReducer;