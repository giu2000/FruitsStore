import { ADD_PRODUCT_TO_CART_REQUEST, ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_ERROR, ADD_PRODUCT_QUANTITY_IN_CART } from "./actionTypes";
import getCartProducts from './getCartProducts';

const addProductToCartRequest = () => {
    return {
        type: ADD_PRODUCT_TO_CART_REQUEST
    }
}

const addProductToCartSuccess = product => {
    return {
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: {
            product: product
        }
    }
}

const addProductToCartError = error => {
    return {
        type: ADD_PRODUCT_TO_CART_ERROR,
        payload: {
            error: error
        }
    }
}


const addProductQuantityCart = (id,quantity) => {
    return {
        type: ADD_PRODUCT_QUANTITY_IN_CART,
        payload: {
            id: id,
            quantity: quantity
        }
    }
}

const baseUrl = 'http://127.0.0.1:3001/cart';
const optionsForPOSTRequest = product => {
    return {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        // body: JSON.stringify(product)
        body: JSON.stringify({...product, quantity: 1})
    }
}

const addProductToCart = (product) => (dispatch, getState) => {
    console.log('getState', getState());
    if(getState().cart.productsList.products.filter(prdct => prdct.id === product.id) !== []){
        console.log('elemento già presente');
        console.log('productID', product.id)
        dispatch(addProductQuantityCart(5))
    }
    else{
        dispatch(addProductToCartRequest());
        fetch(baseUrl, optionsForPOSTRequest(product))
        .then(response => response.json())
        .then(prdct => dispatch(addProductToCartSuccess(prdct)))
        .catch(error => dispatch(addProductToCartError(console.log(error))));  
    }

    dispatch(getCartProducts());
}

export default addProductToCart;