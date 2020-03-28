import { connect } from "react-redux";
import Basket from '../components/Basket';
import getCartProducts from '../redux/actions/getCartProducts';
import addProductToCart from "../redux/actions/addProductToCart";

const mapStateToProps = state => {
    return {
        loading: state.cart.loading,
        error: state.cart.error,
        productsList: state.cart.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts()),
        addProductToCart: () => dispatch(addProductToCart())
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

export default CartContainer;