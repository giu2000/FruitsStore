import { connect } from "react-redux";
import Cart from '../components/Cart';
import getCartProducts from "../redux/actions/getCartProducts";


const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts())
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
