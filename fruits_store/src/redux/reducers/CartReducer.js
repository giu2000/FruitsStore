import { GET_CART_PRODUCTS_REQUEST, GET_CART_PRODUCTS_SUCCESS, GET_CART_PRODUCTS_ERROR, ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_ERROR, ADD_PRODUCT_QUANTITY_IN_CART } from "../actions/actionTypes"

//initial state for cart.productsList
const initialState = {
    productsList: {
        laoding: false,
        error: null,
        products: []
    },
    newProduct: {
        loading: false,
        error: null,
        product: null,
        quantity: 0
    }
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CART_PRODUCTS_REQUEST:
            return {
                ...state,
                productsList: {
                    loading: true,
                    error: null,
                    products: []
                }
            }
        case GET_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsList:{
                    loading: false,
                    error: null,
                    products: action.payload.products
                }
            }
        case GET_CART_PRODUCTS_ERROR:
            return {
                ...state,
                productsList: {
                    laoding: false,
                    error: action.payload.error
                }
            }
        case ADD_PRODUCT_QUANTITY_IN_CART:
            return {
                ...state,
                newProduct: {
                    quantity: action.payload.quantity
                }
            }
        case ADD_PRODUCT_TO_CART_REQUEST:
            return {
                ...state,
                newProduct: {
                    loading: true,
                    error: null,
                    product: null
                }
            }
        case ADD_PRODUCT_TO_CART_SUCCESS:
            return {
                ...state,
                newProduct: {
                    loading: false,
                    error: null,
                    product: action.payload.product
                }
            }
        case ADD_PRODUCT_TO_CART_ERROR:
            return {
                ...state,
                newProduct: {
                    loading: false,
                    error: action.payload.error
                }
            }
        default:
            return state
    }
}

export default cartReducer;