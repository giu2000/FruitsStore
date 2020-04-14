import { 
    REMOVE_PRODUCT_FROM_CART_REQUEST, 
    REMOVE_PRODUCT_FROM_CART_SUCCESS, 
    REMOVE_PRODUCT_FROM_CART_ERROR 
} from "../types/ActionTypes";

import fetchCartProducts from './fetchCartProducts';

const removeProductFromCartRequest = () => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_REQUEST
    }
}

const removeProductFromCartSuccess = () => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_SUCCESS
    }
}

const removeProductFromCartError = error => {
    return {
        type: REMOVE_PRODUCT_FROM_CART_ERROR,
        payload: {
            error
        }
    }
}

const getCartProductIndex = (cart, id) => cart.findIndex(prdct => prdct.id === id);

const baseUrl = 'http://127.0.0.1:3001/cart';

const removeProductFromCart = product => (dispatch, getState) => {
    const { cart: { products } } = getState();
    const index = getCartProductIndex( products, product.id);
    const endpoint = `${baseUrl}/${product.id}`;
    const method = products[index].quantity > 1 ? 'PUT' : 'DELETE';
    let  qty;

    dispatch(removeProductFromCartRequest());

    if(index === -1){
        console.log('error');
    }

    if(products[index].quantity > 1){
        qty = products[index].quantity
    }

    fetch(endpoint, {
        method,
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(
            {
                ...product,
                quantity: qty - 1
            }
        )
    })
    .then(response => response.json())
    .then(product => {
        dispatch(removeProductFromCartSuccess());
        dispatch(fetchCartProducts(baseUrl));
        } 
    )
    .catch(error => dispatch(removeProductFromCartError(error)));
}

export default removeProductFromCart;