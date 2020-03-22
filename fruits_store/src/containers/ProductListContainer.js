import {connect} from 'react-redux';
import getProductDetails from '../redux/actions/getProductDetails';
import getAllProducts from '../redux/actions/getAllProducts';
import ProductList from '../components/ProductList';

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () =>  dispatch(getAllProducts()),
        handleProductClick: productId => dispatch(getProductDetails(productId))
    }
} 

const mapStateToProps = state => {
    return {
        loading: state.products.loading,
        error: state.products.error,
        products: state.products.items,
    } 
}

const ProductsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProductList);

export default ProductsListContainer;