import { connect } from "react-redux";
import Basket from "../components/Basket";
import getCartProducts from "../redux/actions/getCartProducts";

const mapStateToProps = state => {
    return {
        loading: state.cart.loading,
        error: state.cart.error,
        products: state.cart.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts())
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

export default CartContainer;