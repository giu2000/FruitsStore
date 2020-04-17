import { 
    ADD_PRODUCT_TO_CART_REQUEST, 
    ADD_PRODUCT_TO_CART_SUCCESS, 
    ADD_PRODUCT_TO_CART_ERROR ,
} from "../types/ActionTypes";
import fetchCartProducts from './fetchCartProducts';
import getCartProductIndex from '../../../utils/getCartProductIndex';
import { baseUrlCart } from "../../../utils/url";

const addProductToCartRequest = () => {
    return {
        type: ADD_PRODUCT_TO_CART_REQUEST
    }
}

const addProductToCartSuccess = () => {
    return {
        type: ADD_PRODUCT_TO_CART_SUCCESS
    }
}

const addProductToCartError = error => {
    return {
        type: ADD_PRODUCT_TO_CART_ERROR,
        payload: {
            error
        }
    }
}

const addProductToCart = product => (dispatch, getState) => {
    const { cart } = getState();
    const index = getCartProductIndex(cart.products, product.id);
    let endpoint, method, qty;
    dispatch(addProductToCartRequest());
    if(index > -1){
        endpoint = `${baseUrlCart}/${product.id}`;
        method = 'PUT';
        qty = cart.products[index].quantity
    }
    else {
        endpoint = baseUrlCart;
        method = 'POST';
        qty = 0;
    }
    fetch(endpoint, {
        method,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...product,
            quantity: qty+1
        })
        
    })
    .then(response => {
        dispatch(addProductToCartSuccess());
        dispatch(fetchCartProducts(baseUrlCart));
        }
    )
    .catch(error => dispatch(addProductToCartError))
}

export default addProductToCart;