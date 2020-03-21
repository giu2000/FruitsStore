import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_ERROR } from "../actions/actionTypes";

const initialState = {
    loading: false,
    error: null,
    products: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state, 
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default rootReducer;