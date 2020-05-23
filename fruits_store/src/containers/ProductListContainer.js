import {connect} from 'react-redux';
import { ProductList } from '../components/ProductList';
import fetchProducts from '../state/products-state/actions/fetchProducts';
import fetchProductDetails from '../state/product-details-state/actions/fetchProductDetails';
import addProductToCart from "../state/cart-state/actions/addProductToCart";
import updateCartProductsCounter from "../state/cart-state/actions/updateCartProductsCounter";
import { baseUrlProducts } from '../utils/url';


const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () =>  dispatch(fetchProducts(baseUrlProducts)),
        fetchProductDetails: productId => dispatch(fetchProductDetails(productId)),
        addProductToCart: (product, quantityChoosen) => dispatch(addProductToCart(product, quantityChoosen)),
        updateCartProductsCounter: () => dispatch(updateCartProductsCounter()),

    }
} 

const mapStateToProps = state => {
    return {
        productsList: state.products,
        cartCounter: state.cart.counter
    } 
}

const ProductsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductsListContainer;