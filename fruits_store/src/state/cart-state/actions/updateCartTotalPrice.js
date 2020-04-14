
import { UPDATE_CART_TOTAL_PRICE } from "../types/ActionTypes";

const updateCartTotalPrice = totalPrice => {
    return {
        type: UPDATE_CART_TOTAL_PRICE,
        payload: {
            totalPrice
        }
    }
}

export default updateCartTotalPrice;