import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import productDetails from './productDetailsReducer';


const rootReducer = combineReducers({
    products: allProductsReducer,
    selectedProduct: productDetails

})

export default rootReducer;