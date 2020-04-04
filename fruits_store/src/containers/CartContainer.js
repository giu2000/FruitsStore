import getCartProducts from "../redux/actions/getCartProducts";
import { connect } from "react-redux";
import Cart from "../components/Cart";

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts('http://127.0.0.1:3001/cart'))
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
