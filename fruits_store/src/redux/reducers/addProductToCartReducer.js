import { LOAD_POST_PRODUCT_REQUEST, LOAD_POST_PRODUCT_SUCCESS, LOAD_POST_PRODUCT_ERROR } from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    products: []
}

const addProductToCartReducer = (state = initialState, action) => {
    console.log('i am in addProductCartReducer');
    switch(action.type){
        case LOAD_POST_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOAD_POST_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false
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

export default addProductToCartReducer;