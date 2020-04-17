import { 
    FETCH_CART_PRODUCTS_REQUETS, 
    FETCH_CART_PRODUCTS_SUCCESS, 
    FETCH_CART_PRODUCTS_ERROR, 
    ADD_PRODUCT_TO_CART_REQUEST,
    ADD_PRODUCT_TO_CART_ERROR,
    ADD_PRODUCT_TO_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_REQUEST,
    REMOVE_PRODUCT_FROM_CART_ERROR,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    UPDATE_CART_TOTAL_PRICE,
    UPDATE_CART_PRODUCTS_COUNTER,
} from "../types/ActionTypes";



const initialState = {
    isLoading: false,
    error: "",
    products: [],
    totalPrice: 0,
    counter: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CART_PRODUCTS_REQUETS:
        case ADD_PRODUCT_TO_CART_REQUEST:
        case REMOVE_PRODUCT_FROM_CART_REQUEST:
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
        case FETCH_CART_PRODUCTS_ERROR:
        case ADD_PRODUCT_TO_CART_ERROR:
        case REMOVE_PRODUCT_FROM_CART_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case ADD_PRODUCT_TO_CART_SUCCESS:
        case REMOVE_PRODUCT_FROM_CART_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                error: ""
            }
        case UPDATE_CART_TOTAL_PRICE:
            return{
                ...state,
                isLoading: false,
                error: "",
                totalPrice: action.payload.totalPrice
            }
        case UPDATE_CART_PRODUCTS_COUNTER:
            return{
                ...state,
                counter: action.payload.counter
            }
        default:
            return state
    }
}

export default cartReducer;