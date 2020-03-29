import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import productDetails from './productDetailsReducer';
import cartReducer from "./CartReducer";


const rootReducer = combineReducers({
    products: allProductsReducer,
    selectedProduct: productDetails,
    cart: cartReducer

 })

export default rootReducer;