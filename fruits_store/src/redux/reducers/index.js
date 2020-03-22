import { combineReducers } from "redux";
import allProductsReducer from './allProductsReducer';
import productDetails from './productDetails';


const rootReducer = combineReducers({
    products: allProductsReducer,
    selectedProduct: productDetails

})

export default rootReducer;