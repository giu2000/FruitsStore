import { combineReducers } from "redux";
import productsReducer from "../state/products-state/reducers/productsReducer";
import cartReducer from "../state/cart-state/reducers/cartReducer";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    form: formReducer
 })

export default rootReducer;