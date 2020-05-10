import { 
    REMOVE_PRODUCT_FROM_CART_REQUEST, 
    REMOVE_PRODUCT_FROM_CART_SUCCESS, 
    REMOVE_PRODUCT_FROM_CART_ERROR 
} from "../types/ActionTypes";
import getCartProductIndex from '../../../utils/getCartProductIndex';
import fetchCartProducts from './fetchCartProducts';
import { baseUrlCart } from "../../../utils/url";


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

const removeProductFromCart = product => (dispatch, getState) => {
    const { cart: { products } } = getState();
    const index = getCartProductIndex( products, product.id);
    const endpoint = `${baseUrlCart}/${product.id}`;
    const method = products[index].quantity > 1 ? 'PUT' : 'DELETE';
    let  qty;
    let prdctTotalPrc;

    dispatch(removeProductFromCartRequest());

    if(index === -1){
        console.log('error');
    }

    if(products[index].quantity > 1){
        qty = products[index].quantity
        prdctTotalPrc = products[index].productTotalPrice
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
                quantity: qty - 1,
                productTotalPrice: prdctTotalPrc - product.price
            }
        )
    })
    .then(response => dispatch(removeProductFromCartSuccess()))
    .catch(error => dispatch(removeProductFromCartError(error)));
    dispatch(fetchCartProducts(baseUrlCart));
}

export default removeProductFromCart;