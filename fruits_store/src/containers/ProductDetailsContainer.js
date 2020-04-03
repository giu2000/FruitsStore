import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails'

const mapStateToProps = state => {
    return {
        product: state.products.currentProduct
    }
}

const ProductDetailsConatiner = connect(mapStateToProps)(ProductDetails);

export default ProductDetailsConatiner;