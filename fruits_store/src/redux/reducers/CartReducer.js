import {
    GET_CART_PRODUCTS_REQUEST,
    GET_CART_PRODUCTS_SUCCESS,
    GET_CART_PRODUCTS_ERROR,
    ADD_PRODUCT_TO_CART_REQUEST,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_ERROR,
} from "../actions/actionTypes"

//initial state for cart.productsList
const initialState = {
    isLoading: false,
    error: '',
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CART_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: '',
                products: []
            }
        case GET_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                products: action.payload.products
            }
        case GET_CART_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case ADD_PRODUCT_TO_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: '',
                product: {}
            }
        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                product: action.payload.product
            }
        case ADD_PRODUCT_TO_CART_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default cartReducer;