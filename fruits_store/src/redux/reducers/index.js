import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import productsReducer from "./productsReducer";


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
 })

export default rootReducer;