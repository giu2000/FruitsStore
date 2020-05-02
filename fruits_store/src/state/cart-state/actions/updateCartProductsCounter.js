import { UPDATE_CART_PRODUCTS_COUNTER } from '../types/ActionTypes';
import { baseUrlCart } from '../../../utils/url';

const cartProductsCounter = counter => {
    return {
        type: UPDATE_CART_PRODUCTS_COUNTER,
        payload: {
            counter
        }
    }
}

const getCounter = products => products.reduce((counter, product) => counter + product.quantity, 0);
const updateCartProductsCounter = () => dispatch => {
    fetch(baseUrlCart)
        .then(resp => resp.json())
        .then(products => {
                dispatch(cartProductsCounter(getCounter(products)))
        })
}

export {cartProductsCounter, getCounter};
export default updateCartProductsCounter;