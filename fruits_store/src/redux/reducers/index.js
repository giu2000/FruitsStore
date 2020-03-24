import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import productDetails from './productDetailsReducer';
import addToCart from "./addProductToCartReducer";
import productsCart from  "./productsCartReducer"


const rootReducer = combineReducers({
    products: allProductsReducer,
    selectedProduct: productDetails,
    cart: addToCart,
    cartList: productsCart
})

export default rootReducer;