import { GET_PRODUCT_DETAILS } from "./actionTypes";

const getProductDetails = productId => {
    return {
        type: GET_PRODUCT_DETAILS,
        payload: {
            productId
        }
    }
}
export default getProductDetails;