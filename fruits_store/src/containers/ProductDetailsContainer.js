import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails'

const mapStateToProps = state => {
    return {
        product: state.products.currentItem,
    }
}

const ProductDetailsContainer = connect(mapStateToProps)(ProductDetails);

export default ProductDetailsContainer;