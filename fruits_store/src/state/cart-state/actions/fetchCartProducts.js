import { 
    FETCH_CART_PRODUCTS_REQUETS, 
    FETCH_CART_PRODUCTS_SUCCESS, 
    FETCH_CART_PRODUCTS_ERROR 
} from "../types/ActionTypes";
import updateCartTotalPrice from './updateCartTotalPrice';
import {cartProductsCounter} from './updateCartProductsCounter';
import getTotalPrice from '../../../utils/getTotalPrice';
import getCounter from '../../../utils/getCounter';
import { baseUrlCart } from "../../../utils/url";

const fetchCartProductsRequest = () => {
    return {
        type: FETCH_CART_PRODUCTS_REQUETS
    }
}

const fetchCartProductsSuccess = products => {
    return {
        type: FETCH_CART_PRODUCTS_SUCCESS,
        payload: {
            products
        }
    }
}

const fetchCartProductsError = error => {
    return {
        type: FETCH_CART_PRODUCTS_ERROR,
        payload: {
            error
        }
    }
}

const fetchCartProducts = () => dispatch => {
    dispatch(fetchCartProductsRequest());
    fetch(baseUrlCart)
        .then(response => response.json())
        .then(products => {
            dispatch(fetchCartProductsSuccess(products));
            dispatch(updateCartTotalPrice(getTotalPrice(products)))
            dispatch(cartProductsCounter(getCounter(products)));

        })
        .catch(error => { 
            console.log('error');
            dispatch(fetchCartProductsError(error))
        })
    
}

export default fetchCartProducts;