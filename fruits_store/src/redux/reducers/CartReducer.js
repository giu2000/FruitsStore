import { 
    FETCH_CART_PRODUCTS_REQUETS, 
    FETCH_CART_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_ERROR 
} from "../actions/actionTypes"

const initialState = {
    isLoading: false,
    error: "",
    products: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CART_PRODUCTS_REQUETS:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload.products
            }
        case FETCH_PRODUCTS_ERROR:
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