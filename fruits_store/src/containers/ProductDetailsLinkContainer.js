import { connect } from "react-redux";
import ProductDetailsLink from "../components/ProductDetailsLink";
import getProduct from '../redux/actions/getProduct';

const mapStateToProps = state => {
    return {
        currentProductId: state.products.currentProduct.id
    }
}
const mapDispatchToProps = dispatch => {
    return {

        getProduct: productId => dispatch(getProduct(productId)),
    }
}

const ProductDetailsLinkContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetailsLink);

export default ProductDetailsLinkContainer;