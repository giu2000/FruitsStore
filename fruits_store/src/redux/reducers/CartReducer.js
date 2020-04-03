import { 
    GET_CART_PRODUCTS_REQUEST, 
    GET_CART_PRODUCTS_SUCCESS, 
    GET_CART_PRODUCTS_ERROR, 
    ADD_PRODUCT_TO_CART_REQUEST, 
    ADD_PRODUCT_TO_CART_SUCCESS, 
    ADD_PRODUCT_TO_CART_ERROR
 } from "../actions/actionTypes"

//initial state for cart.productsList
const initialState = {
    isLoading: false,
    error: null,
    products: []
}

const cartReducer = (state = initialState, action) => {
    console.log('actionType', action.type)
    switch(action.type){
        case GET_CART_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
                products: []
            }
        case GET_CART_PRODUCTS_SUCCESS:
            console.log('reducer cart', action.payload.products)
            return {
                ...state,
                isLoading: false,
                error:null,
                products: action.paylod.products
                
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
                isLoading: true
            }
        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false
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