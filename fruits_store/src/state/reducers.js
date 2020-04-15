import { combineReducers } from "redux";
import productsReducer from "../state/products-state/reducers/productsReducer";
import cartReducer from "../state/cart-state/reducers/cartReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
 })

export default rootReducer;