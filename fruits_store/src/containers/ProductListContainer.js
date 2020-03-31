import {connect} from 'react-redux';
import getProduct from '../redux/actions/getProduct';
import getAllProducts from '../redux/actions/getAllProducts';
import ProductList from '../components/ProductList';
import addProductToCart from '../redux/actions/addProductToCart'

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () =>  dispatch(getAllProducts()),
        getProduct: productId => dispatch(getProduct(productId)),
        addProductToCart: product => dispatch(addProductToCart(product))
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading,
        error: state.products.error,
        products: state.products.items,
    }
}

const ProductsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductsListContainer;