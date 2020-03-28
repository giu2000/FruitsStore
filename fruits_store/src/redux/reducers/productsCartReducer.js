import { LOAD_POST_PRODUCT_REQUEST, LOAD_POST_PRODUCT_SUCCESS, LOAD_POST_PRODUCT_ERROR, FETCH_PRODUCTS_CART_ERROR, FETCH_PRODUCTS_CART_SUCCESS, FETCH_PRODUCTS_CART_REQUEST } from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    productToAdd: [],
    productsList: []
}

const productsCartReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_CART_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PRODUCTS_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                productsList: action.payload.productsList
            }
        case FETCH_PRODUCTS_CART_ERROR:
           return{
                ...state,
                error: action.payload.error
            }
        case LOAD_POST_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                productToAdd: action.payload.productToAdd
            }
        case LOAD_POST_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        case LOAD_POST_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default productsCartReducer;