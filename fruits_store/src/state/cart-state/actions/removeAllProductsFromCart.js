import { 
    REMOVE_ALL_PRODUCTS_FROM_CART_REQUEST, 
    REMOVE_ALL_PRODUCTS_FROM_CART_SUCCESS, 
    REMOVE_ALL_PRODUCTS_FROM_CART_ERROR 
} from "../types/ActionTypes"
import { baseUrlCart } from "../../../utils/url";
import fetchCartProducts from "./fetchCartProducts";

const removeAllProductsFromCartRequest = () => {
    return {
        type: REMOVE_ALL_PRODUCTS_FROM_CART_REQUEST
    }
}

const removeAllProductsFromCartSuccess = () => {
    return{
        type: REMOVE_ALL_PRODUCTS_FROM_CART_SUCCESS,
    }
}

const removeAllProductsFromCartError = error => {
    return {
        type: REMOVE_ALL_PRODUCTS_FROM_CART_ERROR,
        payload: {
            error
        }
    }
}

const removeAllProductsFromCart = () => (dispatch, getState) => {
    const { cart: { products } } = getState();
    const urls = products.map(product => `${baseUrlCart}/${product.id}`);
    let requests = urls.map(url => {
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        })
    })
    dispatch(removeAllProductsFromCartRequest());
    Promise.all(requests)
        .then(response => {
            dispatch(removeAllProductsFromCartSuccess())
        })
        .catch(error =>  dispatch(removeAllProductsFromCartError(error)));
        dispatch(fetchCartProducts())
}

export default removeAllProductsFromCart;