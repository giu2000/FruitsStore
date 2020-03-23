import { LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR } from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    products: []
}

const addToCart = (state= initialState, action) => {
    switch(action.type){
        case LOAD_POST_REQUEST:
            return {
                ...state,
                loading:true
            }
        case LOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.product
            }
        case LOAD_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export default addToCart;