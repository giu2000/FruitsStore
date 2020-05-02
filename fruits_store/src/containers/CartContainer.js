import { connect } from "react-redux";
import Cart from "../components/Cart";
import removeProductFromCart from "../state/cart-state/actions/removeProductFromCart";
import addProductToCart from "../state/cart-state/actions/addProductToCart";
import fetchCartProducts from "../state/cart-state/actions/fetchCartProducts";
import updateCartProductsCounter from '../state/cart-state/actions/updateCartProductsCounter';
import removeAllProductsFromCart from '../state/cart-state/actions/removeAllProductsFromCart';
import { baseUrlCart } from "../utils/url";

const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCartProducts: () => dispatch(fetchCartProducts()),
        addProductToCart: product => dispatch(addProductToCart(product)),
        removeProductFromCart: product => dispatch(removeProductFromCart(product)),
        updateCartProductsCounter: () => dispatch(updateCartProductsCounter(baseUrlCart)),
        removeAllProductsFromCart: (products) => dispatch(removeAllProductsFromCart(products))
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
