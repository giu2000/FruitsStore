import { combineReducers } from "redux";
import productsReducer from './allProductsReducer';
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer

 })

export default rootReducer;