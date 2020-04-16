import {connect} from 'react-redux';
import ProductList from '../components/ProductList';
import fetchProducts from '../state/products-state/actions/fetchProducts';
import fetchProductDetails from '../state/product-details-state/actions/fetchProductDetails';
import addProductToCart from "../state/cart-state/actions/addProductToCart";

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () =>  dispatch(fetchProducts('http://127.0.0.1:3001/products')),
        fetchProductDetails: productId => dispatch(fetchProductDetails(productId)),
        addProductToCart: product => dispatch(addProductToCart(product))
    }
} 

const mapStateToProps = state => {
    return {
        productsList: state.products
    } 
}

const ProductsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductsListContainer;