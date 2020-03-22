import { GET_PRODUCT_DETAILS } from '../actions/actionTypes';

const initialState = {
    selectedProduct:''
}

const productDetails = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                selectedProduct: action.payload.productId
            }
        default:
            return state
    }
}

export default productDetails;