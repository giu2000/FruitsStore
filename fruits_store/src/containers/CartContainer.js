import { connect } from "react-redux";
import Cart from "../components/Cart";
import removeProductFromCart from "../redux/actions/removeProductFromCart";
import addProductToCart from "../redux/actions/addProductToCart";
import getCartProducts from "../redux/actions/getCartProducts";

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts('http://127.0.0.1:3001/cart')),
        addProductToCart: product => dispatch(addProductToCart(product)),
        removeProductFromCart: product => dispatch(removeProductFromCart(product))
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
