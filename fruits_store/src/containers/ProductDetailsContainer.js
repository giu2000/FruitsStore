import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails'

const mapStateToProps = state => {
    return{
        products: state.products.items,
        selectedProduct: state.selectedProduct.selectedProduct
    }
}

const ProductDetailsContainer = connect(mapStateToProps)(ProductDetails);

export default ProductDetailsContainer;