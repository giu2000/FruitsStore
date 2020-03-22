import { connect } from "react-redux";
import ProductDetails from '../components/ProductDetails'
import getProductDetails from "../redux/actions/getProductDetails";

// const mapDispatchToProps = dispatch => {
//     return{
//         getProductDetails: () => dispatch(getProductDetails())
//     }
// }

const mapStateToProps = state => {
    return{
        selectedProduct: state.selectedProduct.selectedProduct
    }
}

const ProductDetailsContainer = connect(mapStateToProps)(ProductDetails);

export default ProductDetailsContainer;