import { 
    REMOVE_ALL_PRODUCTS_FROM_CART_REQUEST, 
    REMOVE_ALL_PRODUCTS_FROM_CART_SUCCESS, 
    REMOVE_ALL_PRODUCTS_FROM_CART_ERROR 
} from "../types/ActionTypes"
import { baseUrlCart } from "../../../utils/url";

const removeAllProductsFromCartRequest = () => {
    return {
        type: REMOVE_ALL_PRODUCTS_FROM_CART_REQUEST
    }
}

const removeAllProductsFromCartSuccess = products => {
    return{
        type: REMOVE_ALL_PRODUCTS_FROM_CART_SUCCESS,
        payload: {
            products
        }
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
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(prdcts => dispatch(removeAllProductsFromCartSuccess(prdcts)))
        .catch(error =>  dispatch(removeAllProductsFromCartError(error)));
}

export default removeAllProductsFromCart;