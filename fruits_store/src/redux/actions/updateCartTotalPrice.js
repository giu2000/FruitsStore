
import { UPDATE_CART_TOTAL_PRICE } from "./actionTypes";

const updateCartTotalPrice = totalPrice => {
    return {
        type: UPDATE_CART_TOTAL_PRICE,
        payload: {
            totalPrice
        }
    }
}

export default updateCartTotalPrice;