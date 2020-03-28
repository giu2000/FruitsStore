import { FETCH_PRODUCTS_CART_REQUEST, FETCH_PRODUCTS_CART_SUCCESS, FETCH_PRODUCTS_CART_ERROR } from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    products: []
}


const getCartProductsReducer = (state=initialState, action) => {
    console.log('i am in getCartProductsReducer');
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
                products: action.payload.products
            }
        case FETCH_PRODUCTS_CART_ERROR:
           return{
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}
export default getCartProductsReducer;