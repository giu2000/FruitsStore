import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import productDetails from './productDetailsReducer';
import productsCartReducer from "./productsCartReducer";


const rootReducer = combineReducers({
    products: allProductsReducer,
    selectedProduct: productDetails,
    cart: productsCartReducer
 })

export default rootReducer;