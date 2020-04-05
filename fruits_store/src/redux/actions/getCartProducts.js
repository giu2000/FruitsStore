import { 
    FETCH_CART_PRODUCTS_REQUETS, 
    FETCH_CART_PRODUCTS_SUCCESS, 
    FETCH_CART_PRODUCTS_ERROR 
} from "./actionTypes";
import updateCartTotalPrice from './updateCartTotalPrice';

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


const getTotalPrice = (total, product) => total + product.price * product.quantity;

const getCartProducts = url => dispatch => {
    dispatch(fetchCartProductsRequest());
    fetch(url)
        .then(response => response.json())
        .then(products => {
            dispatch(fetchCartProductsSuccess(products))
            const totalPrice = products.reduce(getTotalPrice, 0);
            dispatch(updateCartTotalPrice(totalPrice))
        })
        .catch(error => dispatch(fetchCartProductsError(error)))
}

export default getCartProducts;