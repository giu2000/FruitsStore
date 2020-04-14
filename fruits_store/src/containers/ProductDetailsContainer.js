import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails';
// import getProduct from "../redux/actions/getProduct";
import fetchProductDetails from "../state/product-details-state/actions/fetchProductDetails";

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.products.currentProduct,
        // productId: ownProps.productId
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        //getProduct: productId => dispatch(getProduct(productId))
        fetchProductDetails: () => dispatch(fetchProductDetails(ownProps.productId))
    }
}

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;