import { connect } from "react-redux";
import Cart from "../components/Cart";
import removeProductFromCart from "../state/cart-state/actions/removeProductFromCart";
import addProductToCart from "../state/cart-state/actions/addProductToCart";
import fetchCartProducts from "../state/cart-state/actions/fetchCartProducts";

const mapStateToProps = state => {
    return {
        cart: state.cart,
        counterCart: state.cart.products.reduce((total, obj) => total + obj.quantity, 0)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCartProducts: () => dispatch(fetchCartProducts('http://127.0.0.1:3001/cart')),
        addProductToCart: product => dispatch(addProductToCart(product)),
        removeProductFromCart: product => dispatch(removeProductFromCart(product))
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
