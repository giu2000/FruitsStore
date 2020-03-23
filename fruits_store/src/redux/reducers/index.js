import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import productDetails from './productDetailsReducer';
import addToCart from "./addProductToCartReducer";


const rootReducer = combineReducers({
    products: allProductsReducer,
    selectedProduct: productDetails,
    cart: addToCart,
})

export default rootReducer;