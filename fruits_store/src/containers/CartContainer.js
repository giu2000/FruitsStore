import { connect } from "react-redux";
import Cart from '../components/Cart';
import getCartProducts from "../redux/actions/getCartProducts";


const mapStateToProps = state => {
    console.log(state.cart.productsList)
    return {
        productsListLoading: state.cart.productsList.loading,
        productsListError: state.cart.productsList.error,
        productsList: state.cart.productsList.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCartProducts: () => dispatch(getCartProducts())
    }
}

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;
