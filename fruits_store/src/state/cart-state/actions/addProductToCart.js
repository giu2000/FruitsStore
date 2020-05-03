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

const addProductToCart = (product, quantityChoosen) => (dispatch, getState) => {
    const { cart: { products } } = getState();
    const index = getCartProductIndex(products, product.id);
    let endpoint, method, qty, qtyToAdd, prdctTotalPrc;
    dispatch(addProductToCartRequest());
    if(index > -1){
        endpoint = `${baseUrlCart}/${product.id}`;
        method = 'PUT';
        qty = products[index].quantity;
        prdctTotalPrc = products[index].productTotalPrice
    }
    else {
        endpoint = baseUrlCart;
        method = 'POST';
        qty = 0;
        prdctTotalPrc = 0
    }
    qtyToAdd = quantityChoosen ? quantityChoosen[product.name] : 1
    fetch(endpoint, {
        method,
        headers: {
            'Content-type': "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            ...product,
            quantity: qty + qtyToAdd,
            productTotalPrice: prdctTotalPrc + qtyToAdd * product.price
        })
    })
    .then(response => {

        dispatch(addProductToCartSuccess());

    })
    .catch(error => dispatch(addProductToCartError(error)))
    dispatch(fetchCartProducts(baseUrlCart))
}

export default addProductToCart;