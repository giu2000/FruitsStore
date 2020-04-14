import { connect } from "react-redux";
import ProductDetailsLink from "../components/CustomLink";
import fetchProductDetails from '../state/product-details-state/actions/fetchProductDetails';

const mapStateToProps = state => {
    return {
        currentProductId: state.products.currentProduct.id
    }
}
const mapDispatchToProps = dispatch => {
    return {

        fetchProductDetails: productId => dispatch(fetchProductDetails(productId)),
    }
}

const ProductDetailsLinkContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetailsLink);

export default ProductDetailsLinkContainer;