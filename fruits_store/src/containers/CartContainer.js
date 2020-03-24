import { connect } from "react-redux";
import Basket from "../components/Basket";
import getCartProducts from "../redux/actions/getCartProducts";

const mapStateToProps = state => {
    return {
        loading: state.cartList.loading,
        error: state.cartList.error,
        products: state.cartList.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts())
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);

export default CartContainer;