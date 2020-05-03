import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails';
import fetchProductDetails from "../state/product-details-state/actions/fetchProductDetails";
import addProductToCart from "../state/cart-state/actions/addProductToCart";

const mapStateToProps = state => {
    return {
        product: state.products.currentProduct,
        cart: state.cart

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductDetails: () => dispatch(fetchProductDetails(ownProps.productId)),
        addProductToCart: (product, quantityChoosen) => dispatch(addProductToCart(product, quantityChoosen)),
    }
}

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;