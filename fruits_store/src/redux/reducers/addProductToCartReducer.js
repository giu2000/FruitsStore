import { LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_ERROR } from "../actions/actionTypes"

const initialState = {
    loading: false,
    error: null,
    cart: []
}

const addToCart = (state= initialState, action) => {
    switch(action.type){
        case LOAD_POST_REQUEST:
            console.log('post-request')
            return {
                ...state,
                loading:true
            }
        case LOAD_POST_SUCCESS:
            console.log('post-success')
            return {
                ...state,
                loading: false,
                cart: action.payload.product
            }
        case LOAD_POST_ERROR:
            console.log('post-error')
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