import { 
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_REQUEST, 
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_ERROR,
    FETCH_PRODUCT_SUCCESS, 

} from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    error: null,
    products: [],
    currentProduct: {}
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
        case FETCH_PRODUCT_REQUEST:
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
        case FETCH_PRODUCT_ERROR:
            return {
                ...state,
                isLoadign: false,
                error: action.payload.error
            }
        case FETCH_PRODUCT_SUCCESS:
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