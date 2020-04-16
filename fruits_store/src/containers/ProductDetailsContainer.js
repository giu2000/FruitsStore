import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails';
import fetchProductDetails from "../state/product-details-state/actions/fetchProductDetails";

const mapStateToProps = state => {
    return {
        product: state.products.currentProduct,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductDetails: () => dispatch(fetchProductDetails(ownProps.productId))
    }
}

const ProductDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetailsContainer;